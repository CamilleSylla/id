import React from 'react';
import './App.css';

// Pages
import Home from './Pages/Home/Home';

//component
import Nav from './Components/Nav/Nav'
//rooter
import { BrowserRouter as Rooter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services/Services';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
        key={location.key}
          timeout={450}
          classNames="item"
        >
          <Switch location={location}>
            <Route exact path='/'  component={Home} />
            <Route path='/services' component={Services} />
            <Footer />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} />
      <Footer/>
    </div>
  );
}

export default App;
