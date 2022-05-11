import { Link } from 'react-router-dom';
import SideNavigation from './SideNavigation';
import './UserProfile.css'


const UserProfileView = (props) => {
document.title = "User profile";
const {startUp} = props;
  return (
    <div>
    <SideNavigation/>
    <h2>Welcome back </h2>
    <div class="flex-box">

      <div class="progress">
        <strong class="progressText">Continue Learning</strong>
        <br />
        <span class="line"></span>
        <br/>
        <Link to={"/Articles/EncryptionDecryption"}>
          <button class="module" id="user">
          <div class="moduleHeader">Read: Introduction</div>
          <span class="line"></span>
          <p class="moduleContent">What is encryption and decryption? "progress element"</p>
          </button>
        </Link>
        <Link to={"/Articles/SubsitutionCipher"}>
          <button class="module" id="user">
          <div class="moduleHeader">Read: Subsitution Ciphers</div>
          <span class="line"></span>
          <p class="moduleContent">Learn about subsitution ciphers "progress element"</p>
          </button>
        </Link>
        <Link to={"/Articles/Quiz0"}>
          <button class="module" id="user">
          <div class="moduleHeader">Quiz: Subsitution Ciphers</div>
          <span class="line"></span>
          <p class="moduleContent">Test your knowledge about subsitution ciphers "progress element"</p>
          </button>
        </Link>
        <Link to={"/Articles/RC4Article"}>
          <button class="module" id="user">
          <div class="moduleHeader">Read: Stream Ciphers and RC4</div>
          <span class="line"></span>
          <p class="moduleContent">Learn about the stream cipher RC4 "progress element"</p>
          </button>
        </Link>
        <Link to={"/Articles/RC4Quiz"}>
          <button class="module" id="user">
          <div class="moduleHeader">Quiz: Stream Ciphers and RC4</div>
          <span class="line"></span>
          <p class="moduleContent">Test your knowledge about the stream cipher RC4 "progress element"</p>
          </button>
        </Link>
      </div>

      <div class ="savedEncryptions">
        <strong> Saved Encryptions </strong>
        <li>cswrjad cyyyw</li>
        <li>dixxwm pvnzjxeqzv</li>
        <li>64 D9 EB 6A</li>
        <li>U2FsdGVkX19VdHAviSzw4GLtTOy76Ety </li>
        <li>pxtam wpcgt</li>
      </div>

    </div>

    <div class ="learnMore">
      <strong> Learn more </strong>
    </div>
    <button onClick={(e) => startUp(e)}>test</button>



    </div>
  );
}
export default UserProfileView;
