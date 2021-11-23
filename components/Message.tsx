interface Props {
    body: string
    author: string
    date: Date
}

const Message = ({ body, author, date }: Props) => {
    return (
    <div className="card border-secondary my-3" id="message-envoyé">
        <div className="card-header" id="card-header"><p className="author" id="header-author">{author}</p>  
        <p id="header-date">{date.toISOString()}</p>
        </div>
        <div className="card-body text-secondary">
            <p className="card-text" id="card-text">{body}</p>
        </div>
    </div>
    )
}

export default Message