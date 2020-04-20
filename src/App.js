import React from 'react';
import Curso from './Curso'
import "./styles/styles.scss";

const cursos = [
  {
    'title': 'React desde cero',
    'image': 'algo.jpg',
    'price': 30,
    'profesor': 'Beto Quiroga'
  },
  {
    'title': 'Go desde cero',
    'image': 'algo2.jpg',
    'price': 0,
    'profesor': 'Alvaro Felipe'
  }
];

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const App = () => (
  <>
    <div className="ed-grid m-grid-3">
      {
        cursos.map(curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
      }
    </div>
  </>
);

export default App;

// Reglas JSX
// 1. Toda etiqueta debe cerrarse
// 2. Los componentes deben devolver UN solo elemento padre
// 3. Apoyarse de los Fragments cuando se necesite devolver 2 elementos
// 4. Fragment => <> hijos </>
// 5. img siempre se cierra (ver regla 1)
// 6. class => className
// 7. for => htmlFor
// 8. No se puede usar if, else, while
