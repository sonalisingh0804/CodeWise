import chromadb

from embedder import model


client = chromadb.PersistentClient(
    path="./chroma_db"
)

collection = client.get_collection(
    name="codewise"
)

question = "Where is user login implemented?"

query_embedding = model.encode(
    question
).tolist()


results = collection.query(
    query_embeddings=[query_embedding],
    n_results=3
)


for i, document in enumerate(results["documents"][0]):

    print("\n======================")

    print("Result:", i + 1)

    print(document)