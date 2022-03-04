
import React,{ useState, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import User from './components/user/User';
import UserInformation from './components/user/UserInformation';
import Search from './components/user/Search';
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
                        <Route  exact path='/' 
                           render={props => (
                           <Fragment>
                                 <Search />
                                 <div className="container">
                                    <User /> 
                                 </div>
                           </Fragment>
                        )}/>
                     <Route exact path='/about' render={About}/>
                     <Route exact path='/user_information/:login' 
                        render={ props=>(
                           <UserInformation {...props} />
                        ) }/>
                  </Switch>
               </div>
            </Router>
         </AlertState>
      </GithubState>
   ); 
}

export default App;
