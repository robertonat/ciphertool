import UserProfileView from '../views/UserProfileView';
import React, { Component } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'


class UserProfileContainer extends Component {
  constructor(props){
     super(props);
     this.state = {
       savedEncryptions: []
     };
 }
 async createList(){
   for(let word in this.state.savedEncryptions){
     const lis = document.createElement("li")
     const node = document.createTextNode(this.state.savedEncryptions[word]);
     lis.appendChild(node);
     lis.style.overflow = 'auto'
     const element = document.getElementById("List body")
     element.appendChild(lis)

   }
 }
 async componentDidMount(){
   try{
     const user = await Auth.currentAuthenticatedUser();
     const userMod = await DataStore.query(UserInformation, c => c.email("eq" ,user.attributes.email));
     const singleUser = await DataStore.query(UserInformation, userMod[0].id);
     await this.setState({savedEncryptions: singleUser.SavedEncryptions});
     await this.createList();
     console.log(this.state.savedEncryptions)
   }
   catch(error){
     console.log(error)
   }

 }

  render(){
  return (
    <UserProfileView />
  );
}
};



export default UserProfileContainer;
