import './App.css';

import { useState } from 'react';

import { useToggle } from './hooks/useToggle'

import { useIncrement } from './hooks/useIncrement'

function App() {
  // const [count, setCount] = useState(0)

  // const [checked, toggleCheck]= useToggle()

  const[count, increment, decrement]= useIncrement(0)

//dès qu'une fonction utilise un hook, elle devient elle même un hook, il faudra penser à les préfixer par un mot clé use pour pouvoir les identifier après

  return (
    <div>
        {/* <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked && 'Je suis coché'} */}

        Compteur {count}
        <button onClick={increment} >Incrémenter</button>
        <button onClick={decrement} >Décrémenter</button>
    </div>
  )
}

export default App
