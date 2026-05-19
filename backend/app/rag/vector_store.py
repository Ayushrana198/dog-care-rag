from langchain_community.vectorstores import Chroma

CHROMA_PATH = "data/chroma"


def create_vector_store(chunks, embedding_model):

    vector_store = Chroma.from_documents(
        documents=chunks,
        embedding=embedding_model,
        persist_directory=CHROMA_PATH
    )

    vector_store.persist()

    return vector_store


def load_vector_store(embedding_model):

    vector_store = Chroma(
        persist_directory=CHROMA_PATH,
        embedding_function=embedding_model
    )

    return vector_store