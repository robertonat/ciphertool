import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserPool from "./UserPool"
import SignUpView from '../views/SignUpView';
import { DataStore } from '@aws-amplify/datastore';



class SignUpContainer extends Component {
  constructor(props){
     super(props);
     this.state = {
       username: "",
       email: "",
       password:"",
       redirect: false,
       redirectId: null,


     };
 }

 handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
 }

 handleSubmit = async event => {
     event.preventDefault();
     UserPool.signUp(this.state.email, this.state.password, [], null, (err,data) =>{
       if(err){
         alert(err);
       }
       else{
         let user = {
             username: this.state.username,
             email: this.state.email,
             password: this.state.password,
             redirectId: this.state.username
         };
         this.setState({
           username: "",
           email: "",
           password:"",
           redirect: true,
           redirectId: user.username
         });


       }
     });
 }

 componentWillUnmount() {
     this.setState({redirect: false, redirectId: null});
 }

 render() {
     if(this.state.redirect) {
       return (<Redirect to={`/UserProfile/${this.state.redirectId}`}/>)
     }
  return (
    <SignUpView
    handleChange = {this.handleChange}
    handleSubmit={this.handleSubmit}
          />
  );
}
};

export default SignUpContainer;
