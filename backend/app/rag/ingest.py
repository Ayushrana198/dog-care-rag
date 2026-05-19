from app.rag.pdf_loader import load_pdf
from app.rag.text_splitter import split_documents
from app.rag.embedding_model import get_embedding_model
from app.rag.vector_store import create_vector_store

PDF_PATH = "E:\dog-care-rag\Dog-Book.pdf"


def ingest():

    print("Loading PDF...")

    documents = load_pdf(PDF_PATH)

    print(f"Loaded {len(documents)} pages")

    print("Splitting documents...")

    chunks = split_documents(documents)

    print(f"Created {len(chunks)} chunks")

    print("Loading embedding model...")

    embedding_model = get_embedding_model()

    print("Creating vector store...")

    create_vector_store(chunks, embedding_model)

    print("Ingestion completed successfully!")


if __name__ == "__main__":
    ingest()