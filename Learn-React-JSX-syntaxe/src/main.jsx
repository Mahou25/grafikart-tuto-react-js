import { StrictMode } from 'react';

import {
  createRoot,
} from 'react-dom/client';//La librairie qui va permettre de brancher react au dom dans notre page web, il va utiliser de façon spécifique la méthode createRoot

import App from './App.jsx';

createRoot(document.getElementById('root')).render(//Cette méthode va prendre un premier paramètre qui va servir de spécifier à quel élément html on va brancher notre noeud react; ici il s'agit d'un élément qui a un id root que l'on retrouve dans index.html
  //Une fois ce noeud atteint, on utilise la fonction render comme second paramètre pour dire à react de rendre notre application qui est le App.jsx
  <StrictMode>
   <App />
  </StrictMode>,
)




// En React 18, lorsque tu utilises `createRoot()` pour initialiser l’arbre de rendu, tu obtiens un **root React** auquel tu peux appeler `.render()` pour afficher ton composant.

// Mais lorsque tu appelles **`root.unmount()`**, tu demandes à React de :

// * **Détruire toutes les composantes** du DOM associées à ce root.
// * **Libérer les ressources** (events, états, contextes, etc.) liées à l'arbre.
// * **Arrêter complètement la gestion du rendu** pour ce root.

// ---

// ### 🔴 Pourquoi tu ne peux plus appeler `render()` après un unmount() ?

// Après un `unmount()` :

// * Le **root est considéré comme inactif et définitivement détruit**.
// * Appeler `.render()` sur ce même root n’a **plus de sens**, car il n’a plus de contexte pour mettre à jour ou afficher des composants.
// * React te protège contre des mises à jour sur un **root "mort"**.

// ---

// ### 🔄 Comment continuer ?

// Pour rerendre des composants **après unmount**, il faut **créer un nouveau root**, comme ceci :

// ```jsx
// import { createRoot } from 'react-dom/client';

// const root = createRoot(document.getElementById('app'));
// root.render(<App />);

// // Plus tard...
// root.unmount();

// // Si tu veux rerendre :
// const newRoot = createRoot(document.getElementById('app'));
// newRoot.render(<AnotherComponent />);
// ```

// ---

// ### 🧠 En résumé

// * `unmount()` = je détruis totalement ce root.
// * Tu **ne peux pas réutiliser le même objet root** ensuite.
// * Tu dois **recréer un nouveau root** avec `createRoot()`.

// ---



