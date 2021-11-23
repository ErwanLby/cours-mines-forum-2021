import { ChangeEvent, SyntheticEvent, useState } from "react"
import { mutate } from "swr";

const NewMessageForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [message, setMessage] = useState("");

  const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) =>
        setPseudo(event.target.value);
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setMessage(event.target.value);

  const handleSubmit = async (event: SyntheticEvent) => {
      //Prevent browser from submit
      event.preventDefault()
      //Validate data, a priori inutile puisqu'on a mis required
      if (pseudo.length == 0 || message.length == 0) {
        return
      }
      //Send data
      await fetch('https://ensmn.herokuapp.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: pseudo,
          message: message
        })
      })
      //Refresh messages
      mutate('https://ensmn.herokuapp.com/messages')
    }

    return (
        <form onSubmit={handleSubmit} method="post">
        <div className="row"> 
        <div className="col"></div>
        <div className="col-md-auto">
      <div className="form-check mb-3">
        <textarea id="new-message" name="message" rows={3} 
        placeholder="Saisir votre message..." required 
        onChange={handleMessageChange} value={message}>
        </textarea>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Envoyer</button> 
      </div>
      </div>
      <div className="col-md">
      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="pseudo">Pseudo</label>
        <input className="form-check" type="text" id="pseudo" name="pseudo" 
        placeholder="blabla123" required onChange={handlePseudoChange} value={pseudo}/>
      </div>
      </div>
      </div>
      </form>
    )
}


export default NewMessageForm