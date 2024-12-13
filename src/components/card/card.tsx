import "./card.css"

interface CardProps {
    id: string,
    title: string,
    content: string,
    date: Date
}

export function Card ({ id, title, content, date }: CardProps) {
    return(
        <div className="card" id={id}>
            <h1 className="title">{title}</h1>
            <label>{date.toLocaleDateString('pt-BR')}</label>
            <p>{content}</p>
        </div>
    )
}