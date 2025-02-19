import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <>
    
    <h1> Exercice 2 </h1>
    <p>
    Consignes :
    <ul>
    <li> Mettre en forme l&apos;exercice 2 </li>
    <li> Créer ci-dessous un formulaire d&apos;inscription contenant les champs : Prénom, nom, email, mot de passe, checkbox pour
    accepter un quelconque règlement et un bouton de validation. </li>
    </ul>
    </p>

    <form method="post">
      <div>
        <label htmlFor="firstname">Prénom</label>
        <input type="text" id="firstname" name="firstname" placeholder="Prénom" />
      </div>

      <div>
        <label htmlFor="lastname">Nom</label>
        <input type="text" id="lastname" name="lastname" placeholder="Nom" />
      </div>

      <div>
        <label htmlFor="email">Adresse Mail</label>
        <input type="email" id="email" name="email" placeholder="tamere@lap*te.fr" />
      </div>

      <div>
        <label htmlFor="password">Mot de Passe</label>
        <input type="password" id="password" name="password" placeholder="" />
      </div>

      <div>
        <label htmlFor="cgu">Vendre son âme au diable</label>
        <input type="checkbox" id="cgu" name="cgu" />
      </div>

      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
    </>
  )
}

export default Exercise2
