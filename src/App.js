import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PersistentDrawerLeft from './components/PersistentDrawerLeft'
import marketplace from './components/marketplace'
import ultimasCompras from './components/ultimasCompras'

function App() {
  return (
  //   <Provider>
  //   <BrowserRouter>
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //       </header>
  //       <MundialRoutes />
  //     </div>
  //   </BrowserRouter>
  // </Provider>
    <div className="App">
      <PersistentDrawerLeft />
      <Router>
        <div>            
            <Switch>
                <Route exact path="/marketplace" component={marketplace} />
                <Route path="/ultimas-compras" component={ultimasCompras} />
            </Switch>
        </div>
    </Router>
      <header className="App-header">

        
       
      </header>
    </div>
  );
}

export default App;
