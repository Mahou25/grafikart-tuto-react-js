import { useState } from 'react'; // ⬅️ Import manquant !

import { Checkbox } from './components/forms/checkbox';
import { Input } from './components/forms/input';
import { ProductRowCategory } from './components/products/ProductCategoryRow';
import { ProductRow } from './components/products/ProductRow';

const PRODUCTS =[
  {category: "Fruits", price:"$1", stocked:true, name: "Apple"},
  {category: "Fruits", price:"$1", stocked:true, name: "Dragonfruit"},
  {category: "Fruits", price:"$2", stocked:false, name: "Passionfruit"},
  {category: "Vegetables", price:"$2", stocked:true, name: "Spinach"},
  {category: "Vegetables", price:"$4", stocked:false, name: "Pumpkin"},
  {category: "Vegetables", price:"$1", stocked:true, name: "Peas"}
]

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')
  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
       return false
    }
    if (search && !product.name.includes(search)) {
       return false
    }
    return true
  })

  return (
    <div className='container my-3'>
      <SearchBar 
        search={search} 
        onSearchChange={setSearch} 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly}  // ⬅️ Corrigé !
      />
      <ProductTable products={visibleProducts} />
    </div>
  )
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return <div>
    <div className="mb-3">
      <Input value={search} onChange={onSearchChange} placeholder="Rechercher..." />
    </div>
    <Checkbox 
      id="stocked" 
      checked={showStockedOnly} 
      onChange={onStockedOnlyChange} 
      label=""
    />
  </div>
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductRowCategory key={product.category} name={product.category}/>)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className='table'>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
}

export default App