import React, { Component } from "react";
import CaesarCipherView from '../views/CaesarCipherView';
import CaesarCipherDial from '../images/caesar_cipher_dial.png';
import CaesarCipher from '../images/caesar_cipher.png'

class CaesarCipherContainer extends Component {
  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         numOfShifts: 0,
         animation: "off",
         img: null,
         dial: null,
         ctx: null,
         degrees: 0,
         bTurning: false,
         timer: null,
         bClockwise: true,
       };
   } // sets the state to have the necessary variables for working the encryption

  clearCanvas = ()=> {
	 // clear canvas
	this.state.ctx.clearRect(0, 0, 500, 500);
  }

  stopTimer = () => {
	// Stop the timer
	clearTimeout(this.state.timer);
	this.setState({bTurning : false});
}

  startTimer = () => {
  // Start the timer
  clearTimeout(this.state.timer);
  this.setState({bTurning : false});
}

    calculateNewAngle = (iExpectedAngle) => {

    // If we've hit the right place stop the timer
    if (iExpectedAngle === this.state.degrees) {
      this.stopTimer();
      return;
    }

    if (this.state.bClockwise) {
      // Increment the angle of the needle by 5 degrees
      this.setState({degrees: this.state.degrees + 3});

      // Check if we have passed the 0/360 point and adjust
      if (this.state.degrees > 360) {
        this.setState({degrees: 0});
      }

      // Check if we have moved past the target
      if (this.state.degrees > iExpectedAngle) {
        this.setState({degrees: iExpectedAngle});
      }

    } else {

      // Decrement the angle of the needle by 5 degrees
      this.setState({degrees: this.state.degrees - 3});

      // Check if we have passed the 0/360 point and adjust
      if (this.state.degrees < 0) {
        this.setState({degrees : (iExpectedAngle === 0 ? 0 : 360)});
      }

      // Check if we have moved past the target
      if (this.state.degrees < iExpectedAngle) {
        this.setState({degrees : iExpectedAngle});
      }
    }
    }

      getRequiredAngle=()=> {
    // Grab a handle to the shift input
    let shift = document.getElementById('shift'),
      iExpectedAngle = 0,
      iShiftInput = 0;

    if (shift !== null) {

      // Make sure we have a number
      iShiftInput = shift.value * 1.0;

      // Calculate the expected angle for the shift
      iExpectedAngle = Math.floor(((360 / 26) * (iShiftInput % 26)), 0);
    }

    return iExpectedAngle;
    }

    draw=()=> {

    let iExpectedAngle = this.getRequiredAngle();

    this.calculateNewAngle(iExpectedAngle);

    this.clearCanvas();

    // Draw the background onto the canvas
    this.state.ctx.drawImage(this.state.img, 0, 0);

    // Save the current drawing state
    this.state.ctx.save();

    // Now move across and down half the image
    this.state.ctx.translate(245, 264);

    // Rotate around this point
    this.state.ctx.rotate(this.state.degrees * (Math.PI / 180));

    // Draw the shifted letters
    this.state.ctx.drawImage(this.state.dial, -245, -264);

    // Restore the previous drawing state
    this.ctx.restore();

    }


    checkForShiftChange=()=> {
    // Get the angle related to the shift value
    var iExpectedAngle = this.getRequiredAngle();

    // If the currect angle is not the expected angle start the timer
    if (iExpectedAngle !== this.state.degrees) {

      if (this.state.bTurning) {
        this.stopTimer();
      }

      // Determine which way the rotation for move
      this.setState({bClockwise : this.state.iExpectedAngle > this.state.degrees});

      // Star the timer
      this.setState({timer : setInterval(this.draw, 50)});
      this.setState({bTurning : true});
    }
    }



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

  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          this.caesarCipherAnimation();
      }
        else{this.caesarCipher();}
    }

    init = () =>{

    // Grab the compass element
    let canvas = document.getElementById('caesar');

    // Canvas supported?
    canvas = React.createRef();
    if(canvas.getContext('2d'))
    {   alert("ctx starts")
        this.setState({ctx : canvas.getContext('2d')});

        // Load the needle image
        let tempDial = new Image();
        tempDial.scr = CaesarCipherDial
        this.setState({dial : tempDial});


        // Load the compass image
        let tempCompass = new Image();
        tempCompass.scr = CaesarCipher
        this.setState({img : new Image()});
        this.state.img.onload = this.draw;

        // Start the change input monitor timer
        this.setInterval(this.checkForShiftChange, 1000);
    }
    else
    {
        alert("Canvas not supported!");
    }

  }

  render() {
  return (
    <CaesarCipherView
    init = {this.init}
    handleShiftChange = {this.handleShiftChange}
    handleChange = {this.handleChange}
    handleSubmit={this.handleSubmit}
    /> // returns the view page while passing over the functions for the forms
  );
}
};


export default CaesarCipherContainer;
