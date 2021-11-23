const NewMessageForm = () => {
    return (
        <form method="post">
        <div className="row"> 
        <div className="col-md">
      <div className="form-check mb-3">
        <textarea lang="fr" id="new-message" name="message" rows={3} cols={20}
        placeholder="Saisir votre message..." required>
        </textarea>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Envoyer</button> 
      </div>
      </div>
      <div className="col-md">
      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="author">Pseudo</label>
        <input className="form-check" type="text" id="author" name="author" 
        placeholder="blabla123" required />
      </div>
      </div>
      </div>
      </form>
    )
}


export default NewMessageForm