import './App.css';

import { useState } from 'react';

// const title = "Bonjour les gens"
// const style = {color:'red', backgroundColor: 'green'}
// const showTitle = true

// const todos = [
//   'Présenter react',
//   'Présenter le JSX',
//   'Créer des composants'
// ]

function App() {
  // let count = 0
  // const [count, setCount] = useState(0)
  const [person, setPerson] = useState(
    {
      firstName: 'John',
      lastName: 'Aristide',
      age: 18
    }
  )

  // if (person.age < 19) {
  //    const [count, setCount] = useState(0)
  // }

  //   la condition va poser de problème et pourquoi ?
  //   signale un mauvais usage des hooks dans ton composant React. Les hooks (comme useState, useEffect, etc.) doivent toujours être appelés au même niveau d’exécution, sans condition, boucle, ou retour anticipé.

  // Le problème dans ton code :

  // Tu fais ceci :

  // if (person.age < 19) {
  //   const [count, setCount] = useState(0)
  // }


  // Or, ce hook useState est conditionnel : il est appelé uniquement si person.age < 19. Lorsque cet état change, React s'attend à ce que le nombre de hooks reste constant d’un rendu à l’autre. Mais comme ici tu changes la façon dont ils sont rendus selon l'âge, tu obtiens cette erreur.

  console.log('render')

  // const increment = () => {
  //   count +=1
  // } //A expliquer

  // const increment = () =>{
  //   setCount(count +1)
  //   // setCount(count +1)
  //   // setCount(count +1)
  // }
  

  // const increment = () => {
  //   setCount((count) => count +1)
  //   setCount((count) => count +1)
  //   setCount((count) => count +1)
  // };//La fonction setCount ici prend en paramètre la valeur de l'état et imncrémente cette valeur là; on s'attend à une incrémentation en bond de trois qui va éffectivement se réaliser


  const incrementAge = () => {
    // person.age ++
    // setPerson(person)

    setPerson({person, age: person.age + 1})//ça marche
    // setPerson({...person, age: person.age + 1}) ça marche aussi
  }

  // const incrementCount = () => {
  //   setCount(count +1)
  // }
  
  return (
    < >
        {/* <p>
            Compteur: {count}
        </p> */}
        <p>
          Age de {person.firstName}: {person.age}
        </p>
        {/* <button onClick={increment}>Incrémenter</button> */}
        <button onClick={incrementAge}>gagner une année</button>
        {/* <button onClick={incrementCount}>Incrémenter {count}</button> */}
    </>
  )
}



// D’accord, allons-y en profondeur 🔍 — nous allons parler du **Hook `useState`**, de sa syntaxe, mémoire, allocation, type, et pourquoi l’ordre d’appel est si important.

// ---

// ## 🧩 1. **Syntaxe de `useState`**

// Dans React, `useState` est un Hook déclaré ainsi :

// ```jsx
// const [state, setState] = useState(initialValue);
// ```

// ### 🔸 Il prend **un seul paramètre** :

// * `initialValue` : la valeur initiale de l’état

//   * Peut être **un nombre**, **une chaîne**, **un booléen**, **un objet**, **un tableau**, etc.
//   * Peut même être **une fonction lazy** (pour des calculs coûteux).

// Exemples :

// ```jsx
// useState(0)
// useState('Bonjour')
// useState([])              // tableau vide
// useState({ name: 'Alice' })
// useState(() => expensiveInitFunction())  // lazy init
// ```

// ---

// ## 🧩 2. **Ce que `useState` retourne**

// Il retourne **un tableau à deux éléments** :

// ```jsx
// const [state, setState] = useState(...);
// ```

// 1. **state**

//    * La valeur actuelle de l’état
//    * C’est une valeur **figée pendant le rendu** du composant
//    * **Type** : identique à la valeur initiale (React ne le change jamais)

// 2. **setState**

//    * Une fonction pour **mettre à jour l’état**
//    * Prend une valeur ou une fonction qui reçoit l’état précédent
//    * Déclenche un **re-render** du composant

// ---

// ## 🔒 Est-ce que `state` (count) est `const` ?

// Oui.

// Tu écris :

// ```jsx
// const [count, setCount] = useState(0);
// ```

// Le `const` signifie :

// * **La variable `count` ne peut pas être réassignée dans ce rendu**.
// * Mais à chaque **nouveau rendu**, cette variable reçoit une **nouvelle valeur** de React.

// ⚠️ **`count` = une “photo” de l’état à un instant T**, mais elle changera au prochain appel de la fonction composant, si `setCount` a été appelé.

// ---

// ## 🧠 3. Que se passe-t-il en mémoire ?

// ### ☑️ Où est stocké l’état ?

// L’état n’est **pas stocké** dans la fonction composant (qui est exécutée à chaque rendu).
// Il est **stocké dans une structure interne de React**, souvent appelée *hook list* ou *fiber node*.

// Quand `useState` est appelé :

// * React **crée un espace mémoire** pour stocker la valeur initiale (ex: 0)
// * Ce n’est pas une “allocation sur la pile” du composant, mais **un stockage persistant interne à React**
// * À chaque appel à `setState`, React :

//   1. **remplace la valeur stockée**
//   2. **re-render le composant**
//   3. Donne la nouvelle valeur dans `state`

// ### 📌 En résumé :

// * `count` n’est qu’une **copie** temporaire (une variable locale à chaque render)
// * La vraie valeur est **dans React**, associée à ce composant

// ---

// ## 🧭 4. Pourquoi l’ordre d’appel des Hooks est important ?

// React **associe les états aux hooks en se basant sur l’ordre d’appel** dans le code, pas sur les noms :

// Ex :

// ```jsx
// function MyComp() {
//   const [a, setA] = useState(1);         // 1er état
//   const [b, setB] = useState(2);         // 2e état
//   const [c, setC] = useState(3);         // 3e état
  
//   ...
// }
// ```

// React crée une **liste/chaîne** pour ce composant :

// | Index | Valeur |
// | ----- | ------ |
// | 0     | 1      |
// | 1     | 2      |
// | 2     | 3      |

// ➡️ Si le code change l’ordre, React sera perdu 🔥

// Ex. (erreur) :

// ```jsx
// if (condition) {
//   const [a, setA] = useState(1); // ❌ 1er hook ici
// }
// const [b, setB] = useState(2);   // ❌ sera dans une autre position
// ```

// C’est pourquoi React impose :

// * 📏 Les Hooks **doivent être appelés dans le même ordre à chaque rendu**
// * 👍 Pas d’appel conditionnel, ni de boucle autour des hooks

// ---

// ## 📡 5. Allocation en mémoire : comment ?

// * `useState(0)` → React crée une **case mémoire persistante** pour stocker `0`
// * L'état est généralement stocké dans le **Heap**, pas sur la pile d’exécution
// * L’état **persiste même si le composant re-render**

// Quand tu appelles :

// ```jsx
// setCount(count + 1);
// ```

// * React **remplace la valeur dans sa mémoire interne**
// * Et **relance le composant**, avec un nouveau `count` généré depuis la mémoire interne

// ---

// ## 📜 Petit schéma :

// ```
// Composant render 1 :
// count = 0           ← hook0
// setCount() -> change state -> hook0 = 1

// Composant render 2 :
// count = 1           ← récupéré depuis hook0
// ```

// ---

// ## 🔍 En résumé :

// | Question                                | Réponse                                                   |
// | --------------------------------------- | --------------------------------------------------------- |
// | Que prend `useState` ?                  | Une valeur initiale                                       |
// | Que retourne `useState` ?               | `[state, setState]`                                       |
// | Le `state` (`count`) est-il const ?     | Oui, mais il change à chaque re-render                    |
// | Où est stocké l’état ?                  | En interne par React (Hook list dans la mémoire du Fiber) |
// | À quelle valeur `count` pointe-t-il ?   | Une copie locale de la valeur en mémoire interne          |
// | Est-ce une "vraie" allocation mémoire ? | Oui, si primitive → dans le heap de React                 |
// | Pourquoi ordre des hooks important ?    | React associe les états à l’index d’appel                 |

// ----




export default App
