import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LogInView from '../views/LogInView';
import VerificationView from '../views/VerificationView'
import UserPool from "./UserPool"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

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

      }
      verificationSetUp = event =>{
        const verificationCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
        this.setState({
          verificationCode: verificationCode
        })

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
