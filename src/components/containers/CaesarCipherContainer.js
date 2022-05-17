import React, { Component } from "react";
import CaesarCipherView from '../views/CaesarCipherView';
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'

class CaesarCipherContainer extends Component {
  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         numOfShifts: 0,
         animation: "off",
         userid: "",
         lastShift: 0
       };
   } // sets the state to have the necessary variables for working the encryption

   caesarCipherWheel = () => {
    let change = Number(this.state.numOfShifts)*(360/26)
    document.getElementById('lettersid').style.transform="rotate("+change.toString()+"deg)";
   }

   caesarCipherAnimation = async () => {
     await this.caesarCipherWheel();
     await this.caesarCipher(); //runs the caesarCipher function and makes this function wait for it to finish.
     document.getElementById("p1").innerHTML = this.state.initial;
     let ticks = 250; //sets the tick for the animation to 250. Plans are to change it to scale with text length
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



    caesarCipher = async () =>{
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') //creates an array of the alphabet characters
      let lowerCaseStr = this.state.initial.toLowerCase(); //a lower case copy of the string
      let encrypted = ""
      for(let i = 0; i < lowerCaseStr.length; i++){
        let currentLetter = lowerCaseStr[i];
        if(!currentLetter.match(/[a-z]/i)){ //checks if the current charcter is a letter
          encrypted += currentLetter;
          continue;
          }
       let currentIndex = alphabet.indexOf(currentLetter); //finds the value of the current character
       let newIndex = Number(currentIndex) + Number(this.state.numOfShifts); //calcukates the shifted value
       if(newIndex > 25){ newIndex = newIndex-26;} // if the value is higher than the last letter of the alphabet it loops around
       if(this.state.initial[i] === this.state.initial[i].toUpperCase()){
           encrypted += alphabet[newIndex].toUpperCase(); //this checks to see if the current letter was originally uppercase, to make the encrypted letter upper case
       }
       else encrypted += alphabet[newIndex]; //else just add the encrypted lowercase letter
      }
      document.getElementById("p1").innerHTML = encrypted; //updates the webpage with the encrypted text
      if(this.state.animation === "on"){ //if the animation is enabled it saves the encrypted value for the animation function.
      await this.setState({
        encrypted: encrypted
        });
      }

      if(encrypted.length <60) this.updateEncryptions(encrypted);
    }

    updateEncryptions = async (encryption) =>{
      const singleUser = await DataStore.query(UserInformation, this.state.userid);
      console.log(this.state.userid)
      let newEncryptions = []
      if(singleUser.SavedEncryptions.length<1){newEncryptions = newEncryptions + encryption}
      else {
      newEncryptions = newEncryptions + encryption +","
      newEncryptions = newEncryptions + singleUser.SavedEncryptions.slice(0,15)
      }
      console.log(singleUser.SavedEncryptions.length)

      /* Models in DataStore are immutable. To update a record you must use the copyOf function
      to apply updates to the item’s fields rather than mutating the instance directly */
      await DataStore.save(UserInformation.copyOf(singleUser, item => {
        item.SavedEncryptions = newEncryptions.split(",");// Update the values on {item} variable to update DataStore entry
      }));
    }

   handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value //updates the states value to the most recently inputted value on the form
      });
  }

   handleShiftChange = async event => {
    await this.setState({
      [event.target.name]: event.target.value //updates the states value to the most recently inputted value on the form
    });
     if(this.state.animation=== "on"){
      this.caesarCipherWheel();
     }
 }


  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          this.caesarCipherAnimation();
      }
        else{this.caesarCipher();}
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


  render() {
  return (
    <CaesarCipherView
    handleShiftChange = {this.handleShiftChange}
    handleChange = {this.handleChange}
    handleSubmit={this.handleSubmit}
    /> // returns the view page while passing over the functions for the forms
  );
}
};


export default CaesarCipherContainer;
