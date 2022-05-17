import React, { Component } from "react";
import VigenereCipherView from '../views/VigenereCipherView';
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'
class VigenereCipherContainer extends Component{

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


   vigenereCipherAnimation = async () =>{
     await this.vigenereCipher(); //runs the vigenereCipher function and makes this function wait for it to finish.
     document.getElementById("p1").innerHTML = this.state.initial;
     let ticks = 150; //sets the tick for the animation to 250. Plans are to change it to scale with text length
     let encryptedPlaceHolder = this.state.encrypted;
     let initialPlaceHolder = this.state.initial;
     let i = 0;
     let timer = setInterval(onTick, ticks); // sets the timer for the animation with a function and tick rate
     function onTick(){
       if (i === (initialPlaceHolder.length)) { // a condition to see if the function went through the length of the initial string
      clearInterval(timer); //if the function has gone through the initial string it clears the animation set up
        }

        /*Javascript strings are inmutable, as such in order to change the string I had to change it to an array, change the letter
        in the array and then turn the array back into a string. It is a necessary work around*/
      else {
      let temp = initialPlaceHolder.split('')
      temp[i] = encryptedPlaceHolder[i];
      initialPlaceHolder = temp.join('')
      document.getElementById("p1").innerHTML = initialPlaceHolder; //sets the changed string to display on the webpage
        i++;
    }

     }
     if(encryptedPlaceHolder.length <60) this.updateEncryptions(encryptedPlaceHolder);
   }


   vigenereCipher = () =>{
     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') //creates an array of the alphabet characters
     let lowerCaseInitial = this.state.initial.toLowerCase(); //a lower case copy of the inital string
     let lowerCaseKey = this.state.key.toLowerCase(); //a lower case copy of the key string
     let encrypted = ""
     let j = 0; //starts a counter for use in the key operations
     for(let i = 0; i < lowerCaseInitial.length; i++){
      let currentLetter = lowerCaseInitial[i];

        if(!currentLetter.match(/[a-z]/i)){ //checks if the current charcter is a letter
          encrypted += currentLetter;
          continue;
          }
      let keyLetter = lowerCaseKey[j%lowerCaseKey.length]; //finds the key letter
      let currentIndex = alphabet.indexOf(currentLetter); //finds value of current letter of string
      let shiftedIndex= alphabet.indexOf(keyLetter) //finds the value of the key letter

      let newIndex = Number(currentIndex) + Number(shiftedIndex); //finds the encrypted letters value
      if(newIndex > 25){ newIndex = newIndex-26;} // if the value is higher than the last letter of the alphabet it loops around

      if(this.state.initial[i] === this.state.initial[i].toUpperCase()){
          encrypted += alphabet[newIndex].toUpperCase(); //this checks to see if the current letter was originally uppercase, to make the encrypted letter upper case
      }
      else encrypted += alphabet[newIndex]; //else just add the encrypted lowercase letter
      j++; //increments the key counter
     }
     document.getElementById("p1").innerHTML = encrypted;
     this.setState({
       encrypted: encrypted
       });
       if(encrypted.length <60) this.updateEncryptions(encrypted);
   }

   handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
      });
  }

  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          this.vigenereCipherAnimation();
        }

        else this.vigenereCipher();

    }

  render(){
  return (
    <VigenereCipherView
    handleChange = {this.handleChange}
    handleSubmit={this.handleSubmit}/>
  );
}
};

export default VigenereCipherContainer;
