import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./article.css";
import Quiz0View from '../views/Quiz0View'

class Quiz0 extends Component{
  constructor(props){
       super(props);
       this.state = {
         subcipher: "",
         encryptcaesars5: "",
         encryptrot13: "",
         decryptvigenerekey: "",
         encryptedtext: "",
         encryptvigenerekey: "",
         subcipheruse: "",
         encryptgoal: "",
         correct: 0,
         incorrect: [],
       };
   }

   componentDidMount() {
    window.scrollTo(0,0);
  }
   //Changes the target value in the state to the answers the person last put in before submitting
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
     });
 }

 //Checks the answers submitted against the answer key. The written-in answers are changed to lowercase to avoid any case sensitivity issues.
 handleSubmit = async event => {
       event.preventDefault();
       if(this.state.subcipher === "MD5") this.state.correct = this.state.correct +1;
       else{this.state.incorrect[this.state.incorrect.length] = 1}

       if(this.state.encryptcaesars5.toLowerCase() === "bj fyyfhp fy ifbs") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 2}

       if(this.state.encryptrot13.toLowerCase() === "pelcgbtencul vf gur cenpgvpr naq fghql bs gurfr frpher pbzzhavpngvba grpuavdhrf") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 3}

       if(this.state.decryptvigenerekey === "this is my super secret recipe") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 4}

       if(this.state.encryptedtext === "ciphertext") this.state.correct = this.state.correct +1;
       else{this.state.incorrect[this.state.incorrect.length] = 5}

       if(this.state.subcipher.toLowerCase() === "pmklv ihpi rqcg vae vvvivw") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 6}

       if(this.state.subcipheruse === "no") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 7}

       if(this.state.encryptgoal === "data-secrecy") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 8}

       let results = String(this.state.correct);
       if(this.state.correct === 8){ document.getElementById("result").innerHTML = "Congratulations you got all 8 questions correct";}
       else{document.getElementById("result").innerHTML = "you got " + results + " right. These are the questions missed " + this.state.incorrect ;}

       this.state.correct = 0;
       this.state.incorrect =[];
     }

  render(){
  return(
    <div>
  <Quiz0View
  handleChange = {this.handleChange}
  handleSubmit={this.handleSubmit}
  / >
  </div>
)};
}
export default Quiz0;
