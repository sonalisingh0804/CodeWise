
import sys
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from analyzer.analyzer import analyze_project

app = FastAPI(title="CodeWise API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class AnalyzeRequest(BaseModel):
    project_path: str = "ai-demo/sample_project"


@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "service": "CodeWise API",
    }


@app.post("/api/analyze")
def analyze(request: AnalyzeRequest):
    project_path = (ROOT / request.project_path).resolve()

    # Only allow analysis of folders inside this repository.
    if not project_path.is_relative_to(ROOT):
        raise HTTPException(status_code=400, detail="Invalid project path")

    if not project_path.is_dir():
        raise HTTPException(status_code=404, detail="Project folder not found")

    try:
        return analyze_project(str(project_path))
    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Analysis failed: {exc}",
        ) from exc
