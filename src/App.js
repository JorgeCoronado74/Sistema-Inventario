import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';



var x=localStorage.getItem('user');
function App() {
  let actual;
  if(x==null)
    actual=<Login></Login>
  else
    actual=
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/salir' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  
    return (
      <div className="App">
        <header className="App-header">
        {actual}
        </header>
      </div>
    );
}



export default App;
