//A standardized side navigation bar to put on all the pages.
//
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../../models';

class SideNavigation extends Component {
  state = {
    userName : "",
    redirect: false
  }
  async componentDidMount(){
    this.setState({redirect:false})
    const user = await DataStore.query(UserInformation, c => c.email("eq" ,this.props.auth.user.attributes.email));
    const userid = user[0].id
    const singleUser = await DataStore.query(UserInformation, userid);
    this.setState({ userName: singleUser.UserName });
  }
  componentWillUnmount() {
      this.setState({redirect: false});
  }
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
      this.setState({redirect:true})
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    if(this.state.redirect) {
      this.setState({redirect: false});
      return (<Redirect to={'/'}/>)

    }
    return (
      <div>
        <div class="sidenav">
          <Link to={"/"}>Home Page</Link>

          <Link to={"/Caesar-Cipher"}>Caesar Cipher</Link>

          <Link to={"/Vigenere-Cipher"}>Vigenere Cipher</Link>

          <Link to={"/RC4-Cipher"}>RC4 Cipher</Link>

          <Link to={"/DES"}>DES</Link>

          <Link to={"/Articles"}>Articles</Link>
          <div>
          {this.props.auth.isAuthenticated && this.props.auth.user && (
                  <Link to={"/UserProfile/"+this.state.userName}>
                    {this.state.userName}
                  </Link>
                )}
          </div>
          <div>
          {!this.props.auth.isAuthenticated && (
            <body>
          <Link to={"/Login"}>Log in</Link>
          <br/>
          <Link to={"/Signup"}>Sign up</Link>
          </body>
        )}
        </div>
        {this.props.auth.isAuthenticated && (
            <Link to={"/"} onClick={this.handleLogOut} className="">
                Log out
              </Link>
                )}
        </div>
      </div>
    );
  }
}
export default SideNavigation;
