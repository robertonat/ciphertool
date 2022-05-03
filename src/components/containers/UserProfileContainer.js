import UserProfileView from '../views/UserProfileView';
import React, { Component } from "react";
import { connect } from "react-redux";
import { DataStore } from '@aws-amplify/datastore';
import { UserLogin } from '../../models';
import Amplify, { API } from 'aws-amplify';


class UserProfileContainer extends Component {
  constructor(props){
     super(props);
     this.state = {
       username: "",
       email: "",
       api: "apied52cdd7",
       path: "/users"
     };
 }

  startUp = event =>{
    API.get(this.state.api, this.state.path + "/" + "a")
    .then(response => {
        alert(JSON.stringify(response))
      })
      .catch(error => {
        alert(error)
      })
//    const models =  DataStore.query(UserLogin);
//    const fields =  JSON.stringify(models);
//    alert(JSON.stringify(models))
  }
  render(){
  return (
    <UserProfileView
    startUp = {this.startUp} />
  );
}
};



export default UserProfileContainer;
