import { Link } from 'react-router-dom';
import './UserProfile.css'


const UserProfileView = () => {
document.title = "User profile";
  return (
    <div>
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
        <p> saved encryptions have a character limit of 50 </p>
        <div id ="List body"> </div>
      </div>


    </div>

    <div class = "quizProgression">
    <strong>Quiz progression </strong><br/>
    <div>
      <p id="quiz0">
      </p>
      </div>

      <div>
        <p id="RC4Quiz">
        </p>
        </div>
    </div>



    </div>
  );
}
export default UserProfileView;
