import chromadb

from chunker import create_chunks
from embedder import model


client = chromadb.PersistentClient(
    path="./chroma_db"
)

collection = client.get_or_create_collection(
    name="codewise"
)


def store_project(project_path):

    chunks = create_chunks(project_path)

    for index, chunk in enumerate(chunks):

        embedding = model.encode(
            chunk["text"]
        ).tolist()

        collection.add(
            ids=[f"chunk_{index}"],

            embeddings=[embedding],

            documents=[chunk["text"]],

            metadatas=[{
                "file": chunk["file"],
                "type": chunk["type"],
                "name": chunk["name"],
                "line": chunk["line"]
            }]
        )

    print(f"Stored {len(chunks)} chunks.")


if __name__ == "__main__":

    store_project("sample_project")