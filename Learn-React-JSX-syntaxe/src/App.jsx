const title = "Bonjour les gens"
const style = {color:'red', backgroundColor: 'green'}
const showTitle = true

const todos = [
  'Présenter react',
  'Présenter le JSX',
  'Créer des composants'
]
function App() {

  const handleClick = () =>{
    alert("J'ai cliqué sur le titre");
  }

  return <>
  {/* {showTitle ? <h1 onClick={handleClick} id="title" style={style} className="title">{title}</h1> : <p></p>} */}
    <Title color = "red" hidden >Mon agréable composant</Title>
    {/* <Title color = "red" id="monid" className="maclass" data-demo="demo" >Mon agréable composant</Title> */}
    <input type="text"/>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry, widely used since the 1500s. It originated from a scrambled section of "De Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. This placeholder text is commonly used in design and publishing to fill space and give an impression of how the final content will look.
    </p>
    <ul className="">
      {todos.map(todo =>(<li key={todo}>{todo}</li>))}
    </ul>
  </>;
}

// On essaie le fork
function Title({color, children, hidden, ...props}) {
  if (hidden) {
    alert("The title is hidden") //une condition sur la propriété hidden
    // return null
  }

  console.log(hidden)//Deux fois dans la console ? explication

  // option 1 pour passer les propriétés
  // const props={
  //   id: "monid",
  //   className: "maclass"
  //   data-demo: "demo"
  // }

  // option 2
  return <h1 style = {{ color:color }} {...props}>{children}</h1>

  //Passer les propriétés du parent vers l'enfant

  //L'enfant c'est la function Title qui reçoit les paramètres "tout comme une classe title"
  //Le parent c'est l'objet title utilisé dans la composante mère App


  // return <h1 style = {{ color:color }}>{children}</h1>
}//Explication à donner.... La console.log etc ....

export default App
