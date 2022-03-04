
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
import axios from 'axios';
import './App.css';


const App = () =>{

   const [Users, setUsers] = useState([]);
   const [user, setuser] = useState([]);
   const [repos, setrepos] = useState([]);
   const [loading, setloading] = useState(false);
   const [alert, setalert] = useState(null);

   const searchusers = async (text) => {
      setloading(true)
      if(text.value){
         const res = await axios.get('https://api.github.com/search/users?q='+text.value+'&client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
         setUsers(res.data.items)
         setloading(false)
      }else{
         setloading(true)
         const res = await axios.get('https://api.github.com/users?client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
         setUsers(res.data.items)
         setloading(false)
      }

   }

   const getUserInformation = async (username) => {
      setloading(true)
      if(username){
         const res = await axios.get('https://api.github.com/users/'+username);
         setuser(res.data)
         setloading(false)
      }
   }

   const getUserrepo = async (username) => {
      setloading(true)
      if(username){
         const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascclient_id=${
         process.env.REACT_APP_GITHUB_CLIENT_ID}`);
         setrepos(res.data)
         setloading(false)
      }
   }
  
   const clearusers = ()=>{
      setUsers([])
      setloading(false)
   }

   const alertMessage = (msg,type) => {
      setalert({msg, type})
      console.log(alert)
      setTimeout(() => {
         setalert(null)
      }, 5000);
      
   }
   
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Alert alert={alert} />
            <Switch>
                  <Route  exact path='/' 
                     render={props => (
                     <Fragment>
                           <Search 
                              searchusers={searchusers} 
                              clearusers={clearusers} 
                              showClearButton={Users.length > 0 ? true:false}
                              alertMessage={alertMessage} />
                           <div className="container">
                              <User loading={loading} Users={Users} /> 
                           </div>
                     </Fragment>
                  )}/>
               <Route exact path='/about' render={About}/>
               <Route exact path='/user_information/:login' 
                  render={ props=>(
                     <UserInformation 
                           {...props} 
                           getUserInformation={getUserInformation}
                           getUserrepo={getUserrepo} 
                           user={user}
                           repos={repos}
                           loading={loading}   />
                  
                  ) }/>
                     
            </Switch>
         </div>
      </Router>
   ); 
}

export default App;
