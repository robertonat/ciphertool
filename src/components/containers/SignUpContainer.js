import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserPool from "./UserPool"
import SignUpView from '../views/SignUpView';
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';


class SignUpContainer extends Component {
  constructor(props){
     super(props);
     this.state = {
       username: "",
       email: "",
       phone: "",
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
         alert("Email or Password unaccepted");
       }
       else{
         let user = {
             username: this.state.username,
             email: this.state.email,
             phone: this.state.phone,
             redirectId: this.state.username
         };
         user.phone = "+1"+ user.phone;
         DataStore.save(
            new UserInformation({
        		"UserName": user.username,
        		"Quiz0": 0,
        		"RC4Quiz": 0,
        		"SavedEncryptions": [],
        		"email": user.email,
        		"phone": user.phone
        	})
        );
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
