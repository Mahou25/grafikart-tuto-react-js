import './App.css';

import { useFetch } from './hooks/useFetch.js';

function App() {
  // const [count, setCount] = useState(0)

  // const [checked, toggleCheck]= useToggle()

  // const { count, increment, decrement } = useIncrement(0)

  // const{count,increment,  decrement} = useIncrement({
  //   base: 0,
  //   max: 10,
  //   min:0
  // })

  // const[name, setName] = useState('')

  // useDocumentTitle(name ? 'Editer ${name}' : null)

  //dès qu'une fonction utilise un hook, elle devient elle même un hook, il faudra penser à les préfixer par un mot clé use pour pouvoir les identifier après

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')
    
  // 'https://jsonplaceholder.typicode.com/posts?_delay=2000&_limit=11'

  return (
    <div>
        {/* <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked && 'Je suis coché'} */}

        {/* <Input value={name} onChange={setName} label="Nom" />
        Compteur {count}
        <button onClick={increment} >Incrémenter</button>
        <button onClick={decrement} >Décrémenter</button> */}

        {loading && <div>Chargement ...</div>}
        {errors && <div>
          {errors.toString()}
        </div>}
        {data && <div> 
          {/* {JSON.stringify(data)}  */}
          <ul>
            {data.map(post=>(<li key={post.id} > {post.title} </li>))}
          </ul>
          </div>}
    </div>
  )
}

export default App
