
import ast
from pathlib import Path


def analyze_project(project_path):
    root = Path(project_path)
    files = []
    total_functions = 0
    total_classes = 0
    total_imports = 0
    errors = []

    ignored_dirs = {
        ".git", "node_modules", "venv",
        ".venv", "__pycache__", "chroma_db"
    }

    for path in root.rglob("*.py"):
        if any(part in ignored_dirs for part in path.parts):
            continue

        try:
            source = path.read_text(encoding="utf-8")
            tree = ast.parse(source)

            functions = [
                node.name for node in ast.walk(tree)
                if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))
            ]
            classes = [
                node.name for node in ast.walk(tree)
                if isinstance(node, ast.ClassDef)
            ]
            imports = [
                node.module or ""
                for node in ast.walk(tree)
                if isinstance(node, ast.ImportFrom)
            ]

            imports += [
                alias.name
                for node in ast.walk(tree)
                if isinstance(node, ast.Import)
                for alias in node.names
            ]

            files.append({
                "file": str(path.relative_to(root)),
                "lines": len(source.splitlines()),
                "functions": functions,
                "classes": classes,
                "imports": imports,
            })

            total_functions += len(functions)
            total_classes += len(classes)
            total_imports += len(imports)

        except (SyntaxError, UnicodeDecodeError, OSError) as exc:
            errors.append({"file": str(path), "error": str(exc)})

    return {
        "project": root.name,
        "total_files": len(files),
        "total_functions": total_functions,
        "total_classes": total_classes,
        "total_imports": total_imports,
        "files": files,
        "errors": errors,
    }


if __name__ == "__main__":
    result = analyze_project("../ai-demo/sample_project")

    print("Project:", result["project"])
    print("Python files:", result["total_files"])
    print("Functions:", result["total_functions"])
    print("Classes:", result["total_classes"])
    print("Imports:", result["total_imports"])

    for file_info in result["files"]:
        print(
            file_info["file"],
            "| functions:", len(file_info["functions"]),
            "| classes:", len(file_info["classes"]),
        )
