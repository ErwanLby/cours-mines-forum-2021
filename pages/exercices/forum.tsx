import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="message-container" className="flex-grow-1">
        Messages reçus
        <div className="container">

<div className="card border-secondary my-3" id="message-envoyé">
<div className="card-header" id="card-header"><p id="header-pseudo">Pseudo</p>   <p id="header-date">Date d'envoi </p></div>
  <div className="card-body text-secondary">
    <p className="card-text" id="card-text">Bon bah la ça parle un peu...</p>
  </div>
</div>

<div className="card border-secondary my-3" id="message-envoyé">
<div className="card-header" id="card-header"><p id="header-pseudo">Pseudo</p>   <p id="header-date">Date d'envoi </p></div>
  <div className="card-body text-secondary">
    <p className="card-text" id="card-text">Bon bah la ça parle un peu plus...</p>
  </div>
</div>

<div className="card border-secondary my-3" id="message-envoyé">
<div className="card-header" id="card-header"><p id="header-pseudo">Pseudo</p>   <p id="header-date">Date d'envoi </p></div>
  <div className="card-body text-secondary">
    <p className="card-text" id="card-text">Bon bah la ça parle encore...</p>
  </div>
</div>

<div className="card border-secondary my-3" id="message-envoyé">
<div className="card-header" id="card-header"><p id="header-pseudo">Pseudo</p>   <p id="header-date">Date d'envoi </p></div>
  <div className="card-body text-secondary">
    <p className="card-text" id="card-text">Bon bah la ça parle toujours...</p>
  </div>
</div>

      <div className="card border-secondary my-3" id="message-envoyé">
  <div className="card-header" id="card-header"><p id="header-pseudo">Pseudo</p>   <p id="header-date">Date d'envoi </p></div>
  <div className="card-body text-secondary">
    <p className="card-text" id="card-text">Et là ça parle plus</p>
  </div>
</div>
</div>
      </div>
      
      <div id="new-message-container">
        Nouveau message
        <div className="container py-3">
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
        <label className="form-check-label" htmlFor="pseudo">Pseudo</label>
        <input className="form-check" type="text" id="pseudo" name="pseudo" 
        placeholder="blabla123" required />
      </div>
      </div>
      </div>
      </form>
      </div>
      </div>
      
    </div>
  )
}

export default Exercise4
