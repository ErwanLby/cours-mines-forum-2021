async function getRemoteData() { //async pour rendre la fonction asynchrone
    //Get data
    const reponse = await fetch('https://ensmn.herokuapp.com/messages?page=0') //on lui donne un lien et il réucupère la réponse
    const reponseJson = await reponse.json() //on lui dit qu'on veut la rep en json
    // .map(counter => counter +1)
    return reponseJson.map(counter => counter +1)
}


export default getRemoteData