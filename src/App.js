import React, { useState } from 'react';
import './App.css';

// Pages
import Home from './Pages/Home/Home';

//component
import Nav from './Components/Nav/Nav'
//rooter
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Vitrine from './Pages/Services/Vitrine/Vitrine';
import Ecom from './Pages/Services/Ecommerce/Ecom';
import Comp from './Pages/Services/Complexe/Complexe';
import Graph from './Pages/Services/Graph/Graph';
import Supp from './Pages/Services/Supp/Supp'
import Contact from './Pages/Contact/Contact';
function App() {

  const [state, setState] = useState(
    {
      show: false
    }
  );
  let Modal
  if (state.show === true) {
    Modal = <Contact show={setState} />
  }

  return (
    <div className="App">
      <Nav show={setState} />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="item"
          >
            <Switch location={location}>
              <Route exact path='/' render={ () => (<Home show={setState}/>)}/>
              <Route path='/services' render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Vitrine} exact />
                  <Route path={`${url}/vitrine`} component={Vitrine} />
                  <Route path={`${url}/ecommerce`} component={Ecom} />
                  <Route path={`${url}/complexe`} component={Comp} />
                  <Route path={`${url}/graphisme`} component={Graph} />
                  <Route path={`${url}/freelancing`} component={Supp} />
                </>
              )} />
              <Footer />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      {Modal}
      <Footer show={setState}/>
    </div>
  );
}

export default App;
