import React, { Component } from "react";
import RC4View from '../views/RC4View';
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'
class RC4Container extends Component {
  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         key: "",
         userid: "",
         animation: "off"
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

   RC4CipherAnimation = async () =>{
     await this.RC4Cipher();
     document.getElementById("p1").innerHTML = this.state.initial;
     let ticks = 150;
     let encryptedPlaceHolder = this.state.encrypted;
     let initialPlaceHolder = this.state.initial;
     let i = 0;
     let timer = setInterval(onTick, ticks);
     function onTick(){
       if (i === (encryptedPlaceHolder.length)) {
      clearInterval(timer);
        }
      else {
      let temp = initialPlaceHolder.split('')
      temp[i] = encryptedPlaceHolder[i];
      initialPlaceHolder = temp.join('')
      document.getElementById("p1").innerHTML = initialPlaceHolder;
        i++;
    }

     }
   }
   ConvertStringToHex = (str) => {
                 let arr = [];
                 for (let i = 0; i < str.length; i++) {
                        arr[i] = (str.charCodeAt(i).toString(16)).slice(-4);
                 }
                 return " " + arr.join(" ");
          }

   RC4Cipher = () =>{
     let s = [], j = 0, x, res = '';
	    for (var i = 0; i < 256; i++) {
		      s[i] = i;
	     }
	    for (i = 0; i < 256; i++) {
		    j = (j + s[i] + this.state.key.charCodeAt(i % this.state.key.length)) % 256;
		    x = s[i];
		    s[i] = s[j];
		     s[j] = x;
	     }
	     i = 0;
	     j = 0;
	     for (var y = 0; y < this.state.initial.length; y++) {
	      i = (i + 1) % 256;
		    j = (j + s[i]) % 256;
		    x = s[i];
		    s[i] = s[j];
		    s[j] = x;
		    res += String.fromCharCode(this.state.initial.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
      }
      res = this.ConvertStringToHex(res).toUpperCase();
     document.getElementById("p1").innerHTML = res ;
     this.setState({
       encrypted: res
       });
       if(this.state.encrypted.length <60) this.updateEncryptions(res);
     }



   handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
      });
  }

  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          await this.RC4CipherAnimation();

        }

        else {await this.RC4Cipher();
          if(this.state.encrypted.length <60) this.updateEncryptions(this.state.encrypted);
}
    }
   render() {
   return (
     <RC4View
     handleChange = {this.handleChange}
     handleSubmit={this.handleSubmit}/>
   );
 }

}
export default RC4Container;
