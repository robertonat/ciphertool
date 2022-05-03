import React, { Component } from "react";
import DESView from '../views/DESView';

class DESContainer extends Component{

  constructor(props){
       super(props);
       this.state = {
         initial: "",
         encrypted: "",
         key: "",
       };
   }

  Des= ()=>{
    let CryptoJS = require("crypto-js")
    let encrypted = CryptoJS.DES.encrypt(this.state.initial, this.state.key);
    document.getElementById("p1").innerHTML = encrypted;
    this.setState({
      ["encrypted"]: encrypted
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
          this.DesAnimation();
        }

        else this.Des();

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
