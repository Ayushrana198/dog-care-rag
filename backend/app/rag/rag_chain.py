from langchain.chains.combine_documents import (
    create_stuff_documents_chain,
)

from langchain.chains.retrieval import (
    create_retrieval_chain,
)

from langchain_core.prompts import ChatPromptTemplate

from app.rag.llm import get_llm
from app.rag.retriever import get_retriever


def get_rag_chain():

    llm = get_llm()

    retriever = get_retriever()

    prompt = ChatPromptTemplate.from_template(
        """
You are a helpful dog care assistant.

Answer ONLY from the provided context.

If answer is not present in context,
say you do not know.

<context>
{context}
</context>

Question:
{input}
"""
    )

    document_chain = create_stuff_documents_chain(
        llm,
        prompt,
    )

    retrieval_chain = create_retrieval_chain(
        retriever,
        document_chain,
    )

    return retrieval_chain