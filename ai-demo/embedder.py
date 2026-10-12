from sentence_transformers import SentenceTransformer


model = SentenceTransformer("all-MiniLM-L6-v2")


def create_embedding(text):
    return model.encode(text).tolist()


if __name__ == "__main__":

    text = """
    def login(username, password):
        user = connect_database(username)
        return user
    """

    embedding = create_embedding(text)

    print("Embedding length:", len(embedding))
    print(embedding[:10])