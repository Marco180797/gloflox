import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Inicio from './Inicio';
import Login from './Login';
import TiendaOnline from './TiendaOnline'
import Cart from './Cart';
import LoginSuscripcion from './LoginSuscripcion';


const App = () =>
  <>
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={ Inicio } ></Route>
        <Route path="/inicio" exact component={ Inicio } ></Route>
        <Route path="/login" exact component={ Login }></Route>
        <Route path="/tienda" exact component={ TiendaOnline }></Route>
        <Route path="/cart" exact component={ Cart }></Route>
        <Route path="/crearCuenta" exact component={ LoginSuscripcion }></Route>
      </Switch>
      <Footer />
    </Router>
  </>

export default App;
