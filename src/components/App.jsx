import React from 'react';

import './../styles/styles.scss';

import MainMenu from './organisms/MainMenu';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Form from './pages/Form';
import History from './pages/History';
import Users from './pages/Users';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/cursos/:id" component={ Course } />  
      <Route path="/cursos" component={ Courses } />  
      <Route path="/historial/:valor" component={ History } />  
      <Route path="/historial" component={ History } />  
      <Route path="/usuarios" component={ Users } />  
      <Route path="/formulario" component={ () => <Form name="Página de contacto" /> } />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>  
        </div>
      )} />  
    </Switch>
  </Router>
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
