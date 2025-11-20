import './App.css';

import {
  useMemo,
  useState,
} from 'react';

import Input from './components/Input.jsx';
// import Input from './components/Input.jsx';
import { waitSync } from './utils/waitSync.js';

function App() {
  const [name, setName] = useState('')
  // const handleClick = () => {
  //   console.log('hello')
  // }
  
  // const handleClick =useMemo (() => {
  //   console.log('hello')
  // }, [])
  // 
  
  const handleClick =useCallback (() => {
    console.log('name.length')
  }, [name.length])

  const a= useMemo({a:3}, [])

  // console.log(<div className='container my-2 vstack gap-2'> 
  //     <div>
  //       <Input label = "Prénom" onChange={setName} value={name} />
  //       <div>
  //         {name.toUpperCase()}
  //       </div>
  //     </div>
  //     <Info/>

  //   </div>)

  console.log('App', 'render')

  return (
    <div className='container my-2 vstack gap-2'> 
      <Demo/>
      <InfoMemo onClick = {handleClick} a={a} />
    </div>
  )
}

function Demo() {
  const [name, setName] = useState('')
    return (
      <div>
        <Input label = "Prénom" onChange={setName} value={name} />
        <div>
          {name.toUpperCase()}
        </div>
      </div>
  )
}

const InfoMemo = memo(function Info({onClick}) {
  console.log('Info', 'render')

waitSync(500)
return <div className="alert alert-info" onClick = {onClick} >
    {name}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris n
  </div>
}
)


export default App
