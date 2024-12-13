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
            <div className="headerCard">
                <h1 className="title">{title}</h1>
                <label className="date">{date.toLocaleDateString('pt-BR')}</label>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>

        </div>
    )
}