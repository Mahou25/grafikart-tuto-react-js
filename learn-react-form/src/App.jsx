import { useState } from 'react';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
//Partie 1  
// const [firstname, setFirstName] = useState('john doe')

// const handleChange = (e) => {
//   setFirstName(e.target.value)
// }



// 1. e → l'événement

// Quand tu écris quelque chose comme :

// <input onChange={(e) => console.log(e.target.value)} />


// e est l'objet événement qui est automatiquement passé à la fonction onChange.

// Il contient des informations sur l'événement (où il a eu lieu, quel type, etc.).

// 2. e.target → la cible de l'événement

// target est une propriété de l'objet e.

// e.target représente l’élément du DOM (par ex. un <input>, un bouton, une div…) sur lequel l’événement a été déclenché.

// Dans l’exemple ci-dessus, e.target désigne l’élément <input>.

// 3. e.target.value → la valeur de l’élément

// value est une propriété de certains éléments HTML comme <input>, <textarea>, etc.

// Elle contient la valeur actuelle du champ (par exemple, ce que l’utilisateur tape dans un champ texte).



// const reset = () =>{
//   setFirstName('')
// }

// console.log('render')

//   return (
//     <>
//      <form className="" action="" method="">
//       <input
//         type="text"
//         name="firstname"
//         value={firstname}
//         onChange={handleChange}
//       />

//       {/* On parle de champ controlé de react, 
//       sans le onChange, on rencontr des erreurs parceque 
//       le champ input est fait pour que des entrées soient faites, 
//       dès qu'on y fixe une valeur dans onChange, cela déclenche une exception */}

//       {firstname}

//       <button onClick={reset}>Reset</button>
//      </form>
//     </>
//   )







  //Partie 2
  // const handleSubmit = (e) => {
  // e.preventDefault()
  //   console.log(new FormData(e.target))
  // } controler son champ soit même par un input

  // const [value, setValue] = useState (undefined);
  const [value, setValue] = useState ('');
  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  // return <form className="" action="" method="">
  //   <input
  //     type="text"
  //     name="firstname"
  //     // defaultValue="sbdbhfn"
  //     onChange={handleChange}
  //     value={value}
  //   />
  //   <button type="">Envoyer</button>
  // </form>

  //Le principe est pareil pour les textarea

  const [checked, setChecked] = useState(true);
  const toggleCheck = () => {
    setChecked(!checked)
  }

    return <form className="" action="" method="">
    <textarea
      onChange={handleChange}
      value={value}
    />

    <input
      type="checkbox"
      onChange={toggleCheck}
      checked={checked}
    />
    
    {checked && <button type="">Envoyer</button>}
  </form>
}

export default App
