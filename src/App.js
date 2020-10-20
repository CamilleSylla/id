import React from 'react';
import './App.css';

// Pages
import Home from './Pages/Home/Home';

//component
import Nav from './Components/Nav/Nav'
//rooter
import { BrowserRouter as Rooter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Rooter>
        <Nav/>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
      <Footer/>
      </Rooter>
    </div>
  );
}

export default App;
