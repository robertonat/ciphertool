import UserProfileView from '../views/UserProfileView';
import React, { Component } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';
import { Auth } from 'aws-amplify'
import { Link } from "react-router-dom";


class UserProfileContainer extends Component {
  constructor(props){
     super(props);
     this.state = {
       savedEncryptions: [],
       Quiz0Score: 0,
       RC4QuizScore: 0,
       loggedIn: false,
     };
 }
 async createList(){
   for(let word in this.state.savedEncryptions){
     const lis = document.createElement("li")
     const node = document.createTextNode(this.state.savedEncryptions[word]);
     lis.appendChild(node);
     lis.style.overflow = 'auto'
     const element = document.getElementById("List body")
     element.appendChild(lis)

   }
 }
 async addScores(){
   const p = document.createElement("p")
   const node = document.createTextNode("Quiz 0 score: "+ this.state.Quiz0Score + "/8")
   p.appendChild(node);
   const element = document.getElementById("quiz0")
   element.appendChild(p)

   const p2 = document.createElement("p")
   const node2 = document.createTextNode("Quiz 0 score: "+ this.state.RC4QuizScore + "/5")
   p2.appendChild(node2);
   const element2 = document.getElementById("RC4Quiz")
   element2.appendChild(p2)

   }


 async componentDidMount(){
   try{
     const user = await Auth.currentAuthenticatedUser();
     const userMod = await DataStore.query(UserInformation, c => c.email("eq" ,user.attributes.email));
     const singleUser = await DataStore.query(UserInformation, userMod[0].id);
     await this.setState({savedEncryptions: singleUser.SavedEncryptions, loggedIn:true, RC4QuizScore: singleUser.RC4Quiz, Quiz0Score: singleUser.Quiz0 });
     await this.createList();
     await this.addScores();
     console.log(this.state)
   }
   catch(error){
     this.setState({loggedIn:false});
     console.log(error)
   }

 }

  render(){
    if(!this.state.loggedIn){
      return(
        <p> Please <Link to="../../login">log in</Link> to access your account</p>
      )
    }
  return (
    <UserProfileView />
  );
}
};



export default UserProfileContainer;
