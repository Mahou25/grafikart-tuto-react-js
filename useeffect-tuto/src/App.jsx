import './App.css';

import {
  useEffect,
  useState,
} from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    </>
  )
}

function EditTitle(params) {
  const [title, setTitle] = useState('')
  const [firstnama, setFirstname] = useState('')

  useEffect(() =>{
    document.title = title
  }, [title]);

  //Dans ce cas, je vous explique: le use effect donne presque le même effet sur un élément de la DOM tout comme le fait une opération 
  //directe sur l'élément de la DOM. Mais attention, rappelez vous que par exemple le code ci-dessus peut être remplacé par document.title=title mais 
  //remarquons que lorsque vous commentez le code en haut et que nous utilisons celui dans les commentaires, react ne va plus faire attention au titre 
  // seulement mais aussi aux autres éléments dans l'ardre de votre DOM actuel. mais parcontre le useEffect permet de fixer l'atention de react sur l'éssentiel.

  //Qu'est ce que le useEffect ? C'est une fonction de react qui permet de créer un composant de bord lorsqu'un composant est monté
  return <div>
    <Input
      placeholder = "Modifier le titre"
      value = {title}
      onChange={setTitle}
    />
    <Input
      placeholder = "Prénom"
      value = {firstname}
      onChange={setFirstname}
    />
  </div>
}

export default App
