import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import './ArticlesPage.css'
const ArticlesView = () => {
  document.title = "Articles";
  return (
    <div>
      <SideNavigation />
      <h1> Articles related to encryption</h1>
      <div>
      <Link to={"/Articles/EncryptionDecryption"}>
      <button class="articleBox">

      <strong class="articleBoxHeader">  Learn about Encryption and Decryption</strong>
      <span class="line"></span>
        <p class="articleBoxContent">Learn the uses behind encrypting and subsequently decrypting messages to keep them secure</p>

      </button>
      </Link>
      </div>

      <div >
      <Link to={"/Articles/SubsitutionCipher"}>
        <button class="articleBox">
          <strong class="articleBoxHeader" style ={{ marginLeft : -90 }}> Learn about Subsitution ciphers </strong>
          <span class="line"></span>
          <p class="articleBoxContent">Study this "one to one" type of ciphers with Ceasar Cipher and Vigener Ciphers.</p>
        </button>
      </Link>
      </div>

      <div >
      <Link to={"/Articles/RC4Article"}>
        <button class="articleBox">
          <strong class="articleBoxHeader" style ={{ marginLeft : -250 }}> Learn about RC4 </strong>
          <span class="line"></span>
          <p class="articleBoxContent">Learn about this once previously commonly used algorithm!</p>
        </button>
      </Link>
      </div>
      <br />
      <Link to={"/"}>Home Page</Link>
    </div>
  );
};

export default ArticlesView;
