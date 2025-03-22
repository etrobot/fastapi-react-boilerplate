import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from .models import Tool
from .utils.tools_data import tools_data
from typing import List
import os

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(title="Tools API")

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 在生产环境中应该设置具体的域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API 路由
@app.get("/api")
async def api_root():
    logger.info("访问API根路径")
    return {"message": "Welcome to Tools API"}

@app.get("/api/tools", response_model=List[Tool])
async def get_tools():
    logger.info("获取所有工具数据")
    return tools_data

@app.get("/api/tools/{tool_id}", response_model=Tool)
async def get_tool(tool_id: str):
    logger.info(f"获取工具数据，ID: {tool_id}")
    for tool in tools_data:
        if tool["id"] == tool_id:
            return tool
    logger.warning(f"未找到工具，ID: {tool_id}")
    return {"error": "Tool not found"}

# 前端静态文件支持 - 需要先构建前端
frontend_build_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend", "dist")

# 检查前端构建目录是否存在
if os.path.exists(frontend_build_path):
    app.mount("/assets", StaticFiles(directory=os.path.join(frontend_build_path, "assets")), name="assets")
    
    @app.get("/", include_in_schema=False)
    @app.get("/{path:path}", include_in_schema=False)
    async def serve_frontend(path: str = ""):
        logger.info(f"访问前端路径: /{path}")
        index_file = os.path.join(frontend_build_path, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        else:
            logger.warning("前端构建文件不存在")
            return {"message": "前端文件未构建，请先构建前端"}
else:
    @app.get("/")
    async def root():
        logger.info("访问根路径")
        return {"message": "前端文件未构建，请先构建前端"}
