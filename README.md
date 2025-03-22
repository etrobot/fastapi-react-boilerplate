# AI编程工具导航

这是一个展示各种AI编程工具的前后端分离项目。

## 项目结构

- `frontend/`: React前端应用
- `backend/`: FastAPI后端应用

## 开发环境运行

### 1. 运行后端服务

```bash
# 进入后端目录
cd backend

# 创建虚拟环境并激活
uv venv
source .venv/bin/activate  # Linux/Mac
# 或 .venv\Scripts\activate  # Windows

# 安装依赖
uv pip install -r requirements.txt

# 运行开发服务器
uvicorn app.main:app --reload --port 8000
```

后端API将在 http://localhost:8000/api 运行。

### 2. 运行前端开发服务器

```bash
# 在另一个终端中，进入前端目录
cd frontend

# 安装依赖
pnpm install

# 运行开发服务器
pnpm dev
```

前端开发服务器将在 http://localhost:5173 运行。

## 生产环境部署

### 1. 构建前端

```bash
cd frontend
pnpm install
pnpm build
```

这将在 `frontend/dist` 目录生成静态文件。

### 2. 运行后端服务器（将同时提供前端静态文件）

```bash
cd backend
uv venv
source .venv/bin/activate  # Linux/Mac
# 或 .venv\Scripts\activate  # Windows
uv pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

整个应用程序将在 http://localhost:8000 上运行。

## API文档

运行后端服务后，可以在以下地址查看API文档：

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc 