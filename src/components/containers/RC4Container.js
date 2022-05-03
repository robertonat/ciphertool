import React, { Component } from "react";
import RC4View from '../views/RC4View';

class RC4Container extends Component {
  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         key: ""
       };
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
       ["encrypted"]: res
       });
     }



   handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
      });
  }

  handleSubmit = async event => {
        event.preventDefault();
        if(this.state.animation === "on"){
          this.RC4CipherAnimation();
        }

        else this.RC4Cipher();

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
