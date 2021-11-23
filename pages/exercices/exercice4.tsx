import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div>
      <h1> Exercice 4 </h1>

      <p> 
        Consignes :
        <ul>
          <li> Recopier les exercices 1 et 2 ci-dessous </li>
          <li> Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
    Mobile </li>
          <li> Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires </li>
        </ul>
      </p>
    
    <div className="container">
      <div className="row">
        <div className="col-md">
      <table className="table">
      <tr>
        <th>Balise</th>
        <th>Contenu</th>
      </tr>
      <tr>
        <td> ul </td>
        <td> de tout (texte,  images, ...) avec des points</td>
      </tr>
      <tr>
        <td> ol </td>
        <td> de tout, numéroté</td>
      </tr>
      <tr>
        <td> li </td>
        <td> élément  dans une liste</td>
      </tr>
      <tr>
        <td> p </td>
        <td> paragraphe de tout</td>
      </tr>
      </table>
      </div>
      <div className="col-md">
      <form method="post"> 
      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="firstname">Prénom</label>
        <input className="form-check" type="text" id="firstname" name="firstname" placeholder="Prénom" />
      </div>

      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="lastname">Nom</label>
        <input className="form-check" type="text" id="lastname" name="lastname" placeholder="Nom" />
      </div>

      <div  className="form-check mb-3">
        <label className="form-check-label" htmlFor="email">Adresse Mail</label>
        <input className="form-check" type="email" id="email" name="email" placeholder="truc@bidule.fr" />
      </div>

      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="password">Mot de Passe</label>
        <input className="form-check" type="password" id="password" name="password" placeholder="" />
      </div>

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="cgu" name="cgu" />
        <label className="form-check-label" htmlFor="cgu">CGU</label> {/* le label après pour la case*/}
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Envoyer</button> {/*class permet d'avoir un joli bouton*/}
      </div>
    </form>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Exercise4
