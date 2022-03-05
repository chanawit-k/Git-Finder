
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import UserInformation from './components/user/UserInformation';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () =>{

   return (
      <GithubState>
         <AlertState>
            <Router>
               <div className="App">
                  <Navbar />
                  <Alert />
                  <Switch>
                     <Route  exact path='/' component={Home} />
                     <Route exact path='/about' render={About}/>
                     <Route exact path='/user_information/:login' 
                        render={ props=>(
                           <UserInformation {...props} />
                        ) }/>
                     <Route component={NotFound}/>
                  </Switch>
               </div>
            </Router>
         </AlertState>
      </GithubState>
   ); 
}

export default App;
