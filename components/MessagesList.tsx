import Message from './Message'


const MessagesList = () => {
    const messages = [
        {
            body: "Message un peu court",
            author: "Erwan",
            date: new Date()
        },
        {
            body: "Message un peu plus long",
            author: "Moi",
            date: new Date()
        },
        {
            body: "Message inutile",
            author: "R1",
            date: new Date()
        },
        {
            body: "Message inutilement long mais il faut bien tester pour voir comment il gère les messages qui sont un peu long que les autres, genre s'il retourne bien à la ligne",
            author: "Someone else",
            date: new Date()
        }
    ]

    return (
        <div className="container">
            {messages.map(({ body, author, date }, i) => <Message key={i} body={body} author={author} date={date} />)}
        </div>
    )
}

export default MessagesList