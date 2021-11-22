import type { NextPage } from 'next'

const Exercise3: NextPage = () => {
  return (
    <>
    <h1> Exercice 3 </h1>
    
    <p>
    Consignes :
    <ul>
    <li> Mettre en forme l&apos;exercice 3 </li>
    <li> Recopier le formulaire d&apos;inscription précédent ci-dessous </li>
    <li> Grâce au fichier style.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
    bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge. </li>
    </ul>
    </p>

    <div>
      <p id="nouveaubloc">
        Bon bah là on met un peu de texte
      </p>
    </div>

    <form method="post">
      <div>
        <label id="firstname-label" htmlFor="firstname">Prénom</label>
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
        <input type="password" id="password" name="password" placeholder="..." />
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

export default Exercise3
