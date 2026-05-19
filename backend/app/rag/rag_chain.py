from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

from app.rag.llm import get_llm
from app.rag.retriever import get_retriever
from app.rag.prompt import prompt_template


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


def get_rag_chain():

    llm = get_llm()

    retriever = get_retriever()

    rag_chain = (
        {
            "context": retriever | format_docs,
            "question": RunnablePassthrough(),
        }
        | prompt_template
        | llm
        | StrOutputParser()
    )

    return rag_chain