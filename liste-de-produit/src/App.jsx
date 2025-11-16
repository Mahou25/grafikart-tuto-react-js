import './App.css';

import { Checkbox } from './components/forms/checkbox';
import { Input } from './components/forms/input';

// const [count, setCount] = useState(0)
  const PRODUCTS =[
    {category: "Fruits", price:"$1", stocked:true, name: "Apple"},
    {category: "Fruits", price:"$1", stocked:true, name: "Dragonfruit"},
    {category: "Fruits", price:"$2", stocked:true, name: "Passionfruit"},
    {category: "Vegetables", price:"$2", stocked:true, name: "Spinach"},
    {category: "Vegetables", price:"$4", stocked:false, name: "Pumpkin"},
    {category: "Vegetables", price:"$1", stocked:true, name: "Peas"}
  ]
function App() {
  return (
    <>
      return <div>
        <SearchBar/>
      </div>
    </>
  )
}

function SearchBar() {
  return <div>
    <div className='mb-3'>
      <Input value="" onChange = {()=>null} className=""/>
      <Checkbox checked={false} onChange={()=>null} label={"N\'afficher que les produits en stock"} />
    </div>
  </div>
}

export default App
