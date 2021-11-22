import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="message-container"
      className="flex-grow-1">
        Messages reçus
      </div>
      
      <div id="new-message-container">
        Nouveau message
        <form method="post">
        <div className="row"> 
        <div className="col-md">
      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="new-message">Message</label>
        <input className="form-check" type="text" id="new-message" name="new-message" placeholder="Ecrire votre message..." />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Envoyer</button> 
      </div>
      </div>
      <div className="col-md">
      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="pseudo">Pseudo</label>
        <input className="form-check" type="text" id="pseudo" name="pseudo" placeholder="blabla123" />
      </div>
      </div>
      </div>
      </form>
      </div>
      
    </div>
  )
}

export default Exercise4
