import './App.css';

import { useState } from 'react';

import { useToggle } from './hooks/useToggle.js';

import { useIncrement } from "./hooks/useIncrement.js";

import { useDocumentTitle } from "./hooks/useDocumentTitle.js";

import { Input } from './components/Input';

function App() {
  // const [count, setCount] = useState(0)

  // const [checked, toggleCheck]= useToggle()

  // const { count, increment, decrement } = useIncrement(0)

  const{count,increment,  decrement} = useIncrement({
    base: 0,
    max: 10,
    min:0
  })

  const[name, setName] = useState('')

  useDocumentTitle(name ? 'Editer ${name}' : null)

//dès qu'une fonction utilise un hook, elle devient elle même un hook, il faudra penser à les préfixer par un mot clé use pour pouvoir les identifier après

  return (
    <div>
        {/* <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked && 'Je suis coché'} */}

        <Input value={name} onChange={setName} label="Nom" />
        Compteur {count}
        <button onClick={increment} >Incrémenter</button>
        <button onClick={decrement} >Décrémenter</button>
    </div>
  )
}

export default App
