import React from 'react';
import './App.css';

// Pages
import Home from './Pages/Home/Home';

//component
import Nav from './Components/Nav/Nav'
//rooter
import { BrowserRouter as Rooter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Vitrine from './Pages/Services/Vitrine/Vitrine';
import Ecom from './Pages/Services/Ecommerce/Ecom';
import Comp from './Pages/Services/Complexe/Complexe';

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
            <Route path='/services' render={({ match: { url } }) => (
      <>
        <Route path={`${url}/`} component={Vitrine} exact />
        <Route path={`${url}/vitrine`} component={Vitrine} />
        <Route path={`${url}/ecommerce`} component={Ecom} />
        <Route path={`${url}/complexe`} component={Comp} />
      </>
    )}/>
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
