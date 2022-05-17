import "./App.css";
import { Component } from 'react';
import { Auth } from 'aws-amplify'
import React from 'react'
//Router
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {SideNavigation} from "./components/views"

///////Components

//Containers for base pages
import {
  HomePageContainer,
  CaesarCipherContainer,
  ArticlesContainer,
  LogInContainer,
  SignUpContainer,
  VigenereCipherContainer,
  RC4Container,
  UserProfileContainer,
  DESContainer,

} from './components/containers';

//Files for the Articles
import{
  RC4Article,
  EncryptionDecryption,
  SubsitutionCipher,
  Quiz0,
  RC4Quiz
} from './components/articles'

// Routing for the website overall
class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount(){
    try{
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
      console.log(user.attributes.email)
    }
    catch(error){
      console.log(error)
    }
    this.setState({ isAuthenticating: false });
  }

  render(){
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return(
    !this.state.isAuthenticating &&
    <div className="App">
     <Router>
     <div>
    <SideNavigation auth={authProps}/>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/Caesar-Cipher" component={CaesarCipherContainer} />
        <Route exact path="/DES" component={DESContainer} />
        <Route exact path="/Articles" component={ArticlesContainer} />
        <Route exact path="/Login" component={LogInContainer} />
        <Route exact path="/Signup" component={SignUpContainer} />
        <Route exact path="/Vigenere-Cipher" component={VigenereCipherContainer} />
        <Route exact path="/Articles/EncryptionDecryption" component={EncryptionDecryption} />
        <Route exact path="/Articles/SubsitutionCipher" component={SubsitutionCipher} />
        <Route exact path="/Articles/RC4Article" component={RC4Article} />
        <Route exact path="/Articles/RC4Quiz" component={RC4Quiz} />
        <Route exact path="/Articles/Quiz0" component={Quiz0} />
        <Route exact path="/UserProfile/:id" component ={UserProfileContainer}/>
        <Route exact path="/RC4-Cipher" component={RC4Container} />
      </Switch>
        </div>
       </Router>
    </div>
  )
  }
}

export default App;
