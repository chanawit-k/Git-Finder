
import React,{ Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import User from './components/user/User';
import UserInformation from './components/user/UserInformation';
import Search from './components/user/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    users : [],
    user:[],
    loading : false,
    alert:null 
  }
  async componentDidMount() {
    this.setState({loading:true})
    const res = await axios.get('https://api.github.com/users?client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({
      users:res.data,
      loading:false   
    })
  }

  searchusers = async (text) => {
    this.setState({loading:true})
    if(text.value){
      const res = await axios.get('https://api.github.com/search/users?q='+text.value+'&client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
      this.setState({
        users:res.data.items,
        loading:false   
      })
      this.setState({loading:false})
    }else{
      this.setState({loading:true})
      const res = await axios.get('https://api.github.com/users?client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
      this.setState({
        users:res.data,
        loading:false   
      })
    }

  }

  getUserInformation = async (username) => {
    this.setState({loading:true})
    if(username){
      const res = await axios.get('https://api.github.com/users/'+username);
      this.setState({
        user:res.data,
        loading:false   
      })
      this.setState({loading:false})
    }
  }
  
  clearusers = ()=>{this.setState({users : [], loading : false})}

  alertMessage = (msg,type) => {
    this.setState({alert:{msg, type}});
    setTimeout(() => {
      this.setState({alert:null})
    }, 5000);
  }

  render (){
    const {users,user,loading} = this.state

    return (
      <Router>
        <div className="App">
            <Navbar />
            <Alert alert={this.state.alert} />
            <Switch>
              <Route  exact path='/' 
                render={props => (
                  <Fragment>
                    <Search 
                      searchusers={this.searchusers} 
                      clearusers={this.clearusers} 
                      showClearButton={users.length > 0 ? true:false}
                      alertMessage={this.alertMessage} />
                    <div className="container">
                      <User loading={loading} Users={users} /> 
                    </div>
                  </Fragment>
                )}/>
              <Route exact path='/about' render={About}/>
              <Route exact path='/user_information/:login' 
                render={ props=>(<UserInformation {...props} getUserInformation={this.getUserInformation} user={user} loading={loading}   />) }/>
            </Switch>
        </div>
      </Router>
    ); 
  }
}

export default App;
