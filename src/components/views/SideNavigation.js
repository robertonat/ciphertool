//A standardized side navigation bar to put on all the pages.
//
import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideNavigation extends Component {
  render() {
    return (
      <div>
        <div class="sidenav">
          <Link to={"/"}>Home Page</Link>

          <Link to={"/Caesar-Cipher"}>Caesar Cipher</Link>

          <Link to={"/Vigenere-Cipher"}>Vigenere Cipher</Link>

          <Link to={"/RC4-Cipher"}>RC4 Cipher</Link>

          <Link to={"/DES"}>DES</Link>

          <Link to={"/Articles"}>Articles</Link>

          <Link to={"/Login"}>Log in</Link>

          <Link to={"/Signup"}>Sign up</Link>
        </div>
      </div>
    );
  }
}
export default SideNavigation;
