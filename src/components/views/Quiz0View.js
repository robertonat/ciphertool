import { Link } from "react-router-dom";
import "../articles/article.css";

const Quiz0View = (props) => {
const { handleChange, handleSubmit} = props;
document.title = "Quiz0";
  return (
  <div>
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Unit 0 Questions</title>
 </head>
   <body>
     <div class="quiz-container">
         <form onSubmit={(e) => handleSubmit(e)}>

             <div class="quiz-item">
             <p><strong>1.</strong> Which of these ciphers is NOT a substitution cipher?</p>
             <input id = "quizinput" type="radio" id="caesar-shift" name="subcipher" value="Caesar shift" onChange={(e) => handleChange(e)} />
             <label id = "quizlabel" for="caesar-shift">Caesar shift</label><br/ >

             <input id = "quizinput" type="radio" id="rot13" name="subcipher" value="ROT-13" onChange={(e) => handleChange(e)} />
             <label id = "quizlabel" for="rot13">ROT-13</label><br/ >

             <input id = "quizinput" type="radio" id="md5" name="subcipher" value="MD5"  onChange={(e) => handleChange(e)}/>
             <label id = "quizlabel" for="md5">MD5</label><br/ >

             <input id = "quizinput"  type="radio" id="vigenere" name="subcipher" value="Vigenere"  onChange={(e) => handleChange(e)}/>
             <label id = "quizlabel"  for="vigenere">Vigenere</label><br/ >
             </div>
             <br/ >
             <br/ >
             <div class="quiz-item">
             <p><strong>2.</strong> Using a shift of 5, can you encrypt this message?</p>

             <p>Message: “We attack at dawn”</p>
             <label for="encrypt-caesar-s5">Encrypted message:</label>
             <input id ="quizinput" type="text" id="encrypt-caesar-s5" name="encryptcaesars5" onChange={(e) => handleChange(e)}/><br/ >
             <br/ >
             </div>
             <br/ >
             <div class="quiz-item">
             <p><strong>3.</strong> Using a ROT-13 cipher, encrypt the following message:</p>
             <p>“Cryptography is the practice and study of these secure communication techniques”</p>
             <label for="encrypt-rot13">Encrypted message:</label>
             <input type="text" id="encrypt-rot13" name="encryptrot13" onChange={(e) => handleChange(e)}/><br/ >
             <br/ >
             </div>

             <br/ >
             <div class="quiz-item">
             <p><strong>4.</strong> Using a polyalphabetic substitution cipher, decode the following ciphertext with the key “key” :</p>
             <p>Ciphertext: “Dlgc mq wc qetcb wcmvcd vcmmno”</p>
             <label for="decrypt-vigenere-key">Decrypted message:</label>
             <input type="text" id="decrypt-vigenere-key" name="decryptvigenerekey" onChange={(e) => handleChange(e)}/><br/ >
             <br/ >
             </div>

             <br/ >
             <div class="quiz-item">
             <p><strong>5.</strong> What is the correct term for text that has been encrypted?</p>
             <input id = "quizinput" type="radio" id="plaintext" name="encryptedtext" value="plaintext"  onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="plaintext">plaintext</label><br/ >

             <input id = "quizinput" type="radio" id="hypertext" name="encryptedtext" value="hypertext"  onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="hypertext">hypertext</label><br/ >

             <input id = "quizinput" type="radio" id="checksum" name="encryptedtext" value="checksum"  onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="checksum">checksum</label><br/ >

             <input id = "quizinput" type="radio" id="ciphertext" name="encryptedtext" value="ciphertext"  onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="ciphertext">ciphertext</label><br/ >
             <br/ >
             </div>
             <br/ >
             <div class="quiz-item">
             <p><strong>6.</strong> Using the answer from the last question as your key, encrypt the following message:
             </p>
             <p>Message: “Never roll your own crypto”</p>
             <label for="encrypt-vigenere-key">Encrypted message:</label>
             <input type="text" id="encrypt-vigenere-key" name="encrypt-vigenere-key"  onChange={(e) => handleChange(e)} / ><br/ >

             <br/ >
             </div>

             <br/ >
             <div class="quiz-item">
             <p><strong>7.</strong> Should substitution ciphers be used in practice?</p>

             <input id = "quizinput" type="radio" id="yes" name="subcipheruse" value="yes" onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="yes">Yes</label><br/ >

             <input id = "quizinput" type="radio" id="depends" name="subcipheruse" value="depends" onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="depends">It depends</label><br/ >

             <input id = "quizinput" type="radio" id="no" name="subcipheruse" value="no" onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="no">No</label><br/ >
             <br/ >
             </div>
             <br/ >
             <div class="quiz-item">
             <p><strong>8.</strong> What is the goal of encryption?</p>

             <input id = "quizinput" type="radio" id="message-integrity" name="encryptgoal" value="message-integrity" onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="message-integrity">To provide message integrity</label><br/ >

             <input id = "quizinput" type="radio" id="data-secrecy" name="encryptgoal" value="data-secrecy" onChange={(e) => handleChange(e)}/ >
             <label id = "quizlabel" for="data-secrecy">To protect data secrecy</label><br/ >

             <input id = "quizinput" type="radio" id="enforce-auth" name="encryptgoal" value="enforce-auth" onChange={(e) => handleChange(e)} / >
             <label id = "quizlabel" for="enforce-auth">To enforce authentication</label><br/ >
             </div>
             <br/ >
             <button type="submit">Submit</button>
         </form>
          <p id="result"></p>
          <br />
      </div>
      <Link to="/"> Home Page </Link>
      <br/ >
    </body>
  </div>
  );
}
export default Quiz0View;
