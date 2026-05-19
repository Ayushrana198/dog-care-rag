from fastapi import APIRouter
from pydantic import BaseModel

from app.rag.rag_chain import get_rag_chain

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(request: ChatRequest):

    rag_chain = get_rag_chain()

    response = rag_chain.invoke({
        "input": request.message
    })

    return {
        "answer": response["answer"]
    }