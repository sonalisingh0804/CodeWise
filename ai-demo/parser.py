import ast
import os


def parse_python_file(file_path):

    with open(file_path, "r", encoding="utf-8") as file:
        source_code = file.read()

    tree = ast.parse(source_code)

    results = []

    for node in ast.walk(tree):

        if isinstance(node, ast.FunctionDef):

            results.append({
                "type": "function",
                "name": node.name,
                "line": node.lineno,
                "code": ast.get_source_segment(source_code, node)
            })

        elif isinstance(node, ast.ClassDef):

            results.append({
                "type": "class",
                "name": node.name,
                "line": node.lineno,
                "code": ast.get_source_segment(source_code, node)
            })

    return results


def parse_project(project_path):

    all_results = []

    for root, dirs, files in os.walk(project_path):

        for file in files:

            if file.endswith(".py"):

                file_path = os.path.join(root, file)

                try:
                    elements = parse_python_file(file_path)

                    for element in elements:
                        element["file"] = file

                    all_results.extend(elements)

                except Exception as e:
                    print(f"Error parsing {file}: {e}")

    return all_results


if __name__ == "__main__":

    results = parse_project("sample_project")

    for item in results:

        print("\n-------------------")

        print("File:", item["file"])
        print("Type:", item["type"])
        print("Name:", item["name"])
        print("Line:", item["line"])

        print(item["code"])