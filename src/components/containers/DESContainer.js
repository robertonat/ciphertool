import React, { Component } from "react";
import DESView from '../views/DESView';
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'
class DESContainer extends Component{

  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         key: "",
         userid: ""
       };
   }
   async componentDidMount(){
     try{
       const user = await Auth.currentAuthenticatedUser();
       const userMod = await DataStore.query(UserInformation, c => c.email("eq" ,user.attributes.email));
       this.setState({ userid: userMod[0].id});
     }
     catch(error){
       console.log(error)
     }
   }

  Des= ()=>{
    let CryptoJS = require("crypto-js")
    let encrypted = CryptoJS.DES.encrypt(this.state.initial, this.state.key);
    document.getElementById("p1").innerHTML = encrypted;
    this.setState({
      encrypted: encrypted
      });
    this.updateEncryptions(encrypted);
  }

   handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
      });
  }

  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          this.DesAnimation();
        }

        else this.Des();

    }

    updateEncryptions = async (encryption) =>{
      const singleUser = await DataStore.query(UserInformation, this.state.userid);
      let newEncryptions = []
      if(singleUser.SavedEncryptions.length<1){newEncryptions = newEncryptions + encryption}
      else {
      newEncryptions = newEncryptions + encryption +","
      newEncryptions = newEncryptions + singleUser.SavedEncryptions.slice(0,15)
      }
      /* Models in DataStore are immutable. To update a record you must use the copyOf function
      to apply updates to the item’s fields rather than mutating the instance directly */
      await DataStore.save(UserInformation.copyOf(singleUser, item => {
        item.SavedEncryptions = newEncryptions.split(",");// Update the values on {item} variable to update DataStore entry
      }));
    }

   render(){
   return (
     <DESView
     handleChange = {this.handleChange}
     handleSubmit={this.handleSubmit}/>
   );
 }

}


export default  DESContainer;
