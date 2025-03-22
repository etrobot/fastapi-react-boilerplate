# Tools API

这是一个使用FastAPI构建的工具数据API服务。

## 安装依赖

使用uv安装依赖：

```bash
uv venv
source .venv/bin/activate  # 在Unix系统上
.venv\Scripts\activate  # 在Windows系统上
uv pip install -r requirements.txt
```

## 运行服务

```bash
uvicorn app.main:app --reload --port 8000
```

## API端点

- `GET /`: 欢迎信息
- `GET /api/tools`: 获取所有工具数据
- `GET /api/tools/{tool_id}`: 获取特定工具的数据

## API文档

运行服务后，访问以下地址查看API文档：

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
