from parser import parse_project


def create_chunks(project_path):

    parsed_data = parse_project(project_path)

    chunks = []

    for item in parsed_data:

        chunk_text = f"""
File: {item['file']}
Type: {item['type']}
Name: {item['name']}
Line: {item['line']}

Code:
{item['code']}
"""

        chunks.append({
            "text": chunk_text,
            "file": item["file"],
            "type": item["type"],
            "name": item["name"],
            "line": item["line"]
        })

    return chunks


if __name__ == "__main__":

    chunks = create_chunks("sample_project")

    for chunk in chunks:

        print("\n====================")

        print(chunk["text"])