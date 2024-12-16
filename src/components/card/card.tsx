import "./card.css"

interface CardProps {
    annot_id: number,
    title: string,
    content: string,
    instant: string
}

export function Card ({ annot_id, title, content, instant }: CardProps) {
    return(
        <div className="card" key={annot_id}>
            <div className="headerCard">
                <h1 className="title">{title}</h1>
                <label className="date">{instant}</label>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>

        </div>
    )
}