from fastapi import APIRouter

from app.models.chat import ChatRequest
from app.rag.rag_chain import get_rag_chain
from app.rag.retriever import get_retriever

router = APIRouter()

rag_chain = get_rag_chain()

retriever = get_retriever()


@router.post("/chat")
async def chat(request: ChatRequest):

    docs = retriever.invoke(request.message)

    response = rag_chain.invoke(request.message)

    sources = []

    for doc in docs:

        metadata = doc.metadata

        sources.append({
            "source": metadata.get("source", "Unknown"),
            "page": metadata.get("page", "Unknown")
        })

    return {
        "question": request.message,
        "answer": response,
        "sources": sources
    }