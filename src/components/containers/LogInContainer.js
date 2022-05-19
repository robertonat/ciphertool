import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LogInView from '../views/LogInView';
import VerificationView from '../views/VerificationView'
import UserPool from "./UserPool"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';

class LogInContainer extends Component{
  constructor(props){
          super(props);
          this.state = {
            email: "",
            password: "",
            redirect: false,
            redirectId: null,
            verify: false,
            verificationCode: 0,
          };
      }
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      verificationSubmit = event =>{
        if(event.target.value === this.verificationCode){
          this.setState({ redirect:true });
        }
        else{
        this.setState({verify:false, redirectId:null})
        Auth.signOut();
      }
      }

      skipVerification = () =>{
        this.setState({redirect:true})
      }



      verificationSetUp = async event =>{
        const user = await Auth.currentAuthenticatedUser();
        const userMod = await DataStore.query(UserInformation, c => c.email("eq" ,user.attributes.email));
        const singleUser = await DataStore.query(UserInformation, userMod[0].id);

        const apiName = 'twilio';
        const path = '/twilio';
        console.log("verification set up is starting")
        const verificationCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
        this.setState({
          verificationCode: verificationCode
        })
        API.get(apiName, path + "/" + String(singleUser.phone) +"/" + String(verificationCode));
      }

      handleSubmit = async event => {
          event.preventDefault();
          const email = this.state.email;
          const password = this.state.password;
          const user = new CognitoUser({
                Username: email,
                Pool: UserPool,
              });
          const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
              });
          user.authenticateUser(authDetails, {
            onSuccess: (data) => {
              console.log("onSuccess: ", data);
              this.setState({
                verify: true,
                redirectId: email
              })
              this.verificationSetUp();
            },
            onFailure: (err) => {
              console.error("onFailure: ", err);
              alert("Incorrect Email or password")
            },
            newPasswordRequired: (data) => {
              console.log("newPasswordRequired: ", data);
            },
          });
          }

      componentWillUnmount() {
          this.setState({redirect: false, redirectId: null});
      }

  render(){

    if(this.state.redirect) {
      return (<Redirect to={`/UserProfile/${this.state.redirectId}`}/>)
    }
    if(this.state.verify){
      return(
        <VerificationView
        verificationSubmit= {this.verificationSubmit}/>
      )
    }

    return (
      <LogInView
      handleChange = {this.handleChange}
      handleSubmit={this.handleSubmit}
            />
    );
  }
};

export default LogInContainer;
