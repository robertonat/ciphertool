import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./article.css";
import RC4QuizView from '../views/RC4QuizView'
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'

class RC4Quiz extends Component{
  constructor(props){
       super(props);
       this.state = {
         Q1: "",
         Q2: "",
         Q3: "",
         Q4: "",
         Q5: "",
         correct: 0,
         incorrect: [],
       };
   }
   componentDidMount() {
    window.scrollTo(0,0);
  }

  async submitScore(){
    try{
      const user = await Auth.currentAuthenticatedUser();
      const userMod = await DataStore.query(UserInformation, c => c.email("eq" ,user.attributes.email));
      const singleUser = await DataStore.query(UserInformation, userMod[0].id);
      await DataStore.save(UserInformation.copyOf(singleUser, item => {
        item.RC4Quiz = this.state.correct// Update the values on {item} variable to update DataStore entry
      }));
    }
    catch(error){
      console.log(error)
    }
  }
   //Changes the target value in the state to the answers the person last put in before submitting
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
     });
 }

 //Checks the answers submitted against the answer key.
 handleSubmit = async event => {
       event.preventDefault();
       if(this.state.Q1 === "Ron Rivest") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 1}

       if(this.state.Q2 === "Pseudo Random Generator") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 2}

       if(this.state.Q3 === "VCA") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 3}

       if(this.state.Q4 === "RSA") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 4}

       if(this.state.Q5 == "Stream cipher") this.state.correct ++;
       else{this.state.incorrect[this.state.incorrect.length] = 5}

       let results = String(this.state.correct);
       await this.submitScore();
       if(this.state.correct == 5){ document.getElementById("result").innerHTML = "Congratulations you got all 5 questions correct";}
       else{document.getElementById("result").innerHTML = "you got " + results + " right. These are the questions missed " + this.state.incorrect ;}

       this.state.correct = 0;
       this.state.incorrect =[];
     }

  render(){
  return(
    <div>
  <RC4QuizView
  handleChange = {this.handleChange}
  handleSubmit={this.handleSubmit}
  / >
  </div>
)};
}
export default RC4Quiz;
