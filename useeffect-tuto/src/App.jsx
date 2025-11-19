import './App.css';

import {
  useEffect,
  useState,
} from 'react';

import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';

function App() {
  const [showInput, setShowInput] = useState(true)

  return (
    <>
        <Checkbox
          checked = {showInput}
          onChange = {setShowInput}
          id="titleshow"
          label="Afficher le champs titre"
        />
        {showInput && <EditTitle/>}
        <div style = {{ height:'300vh' }}>
          
        </div>
    </>
  )
}


function EditTitle() {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')
  const [y, setY] = useState(0)

  // useEffect(()=>{
  //   const originalTitle = document.title
  //   return () => {
  //     document.title = originalTitle
  //   }
  // },[]);

  // document.title=title 

  // console.log('render')

  useEffect(() =>{
    console.log('title')
    document.title = title
  }, [title]);

  console.log('mounted')
   
  //Dans ce cas, je vous explique: le use effect donne presque le même effet sur un élément de la DOM tout comme le fait une opération 
  //directe sur l'élément de la DOM. Mais attention, rappelez vous que par exemple le code ci-dessus peut être remplacé par document.title=title mais 
  //remarquons que lorsque vous commentez le code en haut et que nous utilisons celui dans les commentaires, react ne va plus faire attention au titre 
  // seulement mais aussi aux autres éléments dans l'ardre de votre DOM actuel. mais parcontre le useEffect permet de fixer l'atention de react sur l'éssentiel.


  
  //Qu'est ce que le useEffect ? C'est une fonction de react qui permet de créer un effet de bord lorsqu'un composant est monté



  // useEffect(()=>{
  //   const handler = ()=>{
  //     console.log('scroll')
  //     setY(window.scrollY)
  //   }
  //   window.addEventListener('scroll', handler)
  //   return ()=>{
  //     window.removeEventListener('scroll', handler)
  //   }
  // }, [])



  // Après un useEffect il faut souvent penser à néttoyer un evenement

  return <div className="vstack gap-2">
    <div>
      Scroll: {y}
    </div>
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