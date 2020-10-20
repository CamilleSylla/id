import React from 'react';
import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Web from './Pages/Web/Web';

//component
import Nav from './Components/Nav/Nav'
//rooter
import { BrowserRouter as Rooter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Rooter>
        <Nav/>
        <Route path='/' exact component={Home} />
        <Route path='/Web' exact component={Web} />
      </Rooter>
    </div>
  );
}

export default App;
