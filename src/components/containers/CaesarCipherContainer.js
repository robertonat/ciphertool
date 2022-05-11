import React, { Component ,useState, useEffect, useRef} from "react";
import CaesarCipherView from '../views/CaesarCipherView';
import CaesarCipherDial from '../images/caesar_cipher_dial.png';
import CaesarCipher from '../images/top.png'

class CaesarCipherContainer extends Component {
  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         numOfShifts: 0,
         animation: "off"
       };
   } // sets the state to have the necessary variables for working the encryption



   caesarCipherAnimation = async () => {
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
      }



    caesarCipher = () =>{
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
      this.setState({
        ['encrypted']: encrypted
        });
      }
    }

   handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value //updates the states value to the most recently inputted value on the form
      });
  }

  handleShiftChange = event => {
    this.setState({
      [event.target.name]: event.target.value //updates the states value to the most recently inputted value on the form
     });
     let change = event.target.value *15;

    document.getElementById('letters').style.transform="rotate("+change.toString()+")";
    alert("shift change")
 }

  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          this.caesarCipherAnimation();
      }
        else{this.caesarCipher();}
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
