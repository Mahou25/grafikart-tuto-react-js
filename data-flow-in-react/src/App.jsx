import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function CGUCheckbox({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
        />
        Accepter les conditions d'utilisation
      </label>
    </div>
  )
}

function App() {
  const [isTermAccepted, setIsTermAccepted] = useState(false)

  return (
    <form>
      <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
      <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </form>
  )
}

export default App
