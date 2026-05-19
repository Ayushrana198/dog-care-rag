from app.rag.embedding_model import get_embedding_model
from app.rag.vector_store import load_vector_store


def get_retriever():

    embedding_model = get_embedding_model()

    vector_store = load_vector_store(embedding_model)

    retriever = vector_store.as_retriever(
        search_kwargs={"k": 3}
    )

    return retriever