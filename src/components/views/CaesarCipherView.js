import { Link } from "react-router-dom";
import CaesarCipher from '../images/cipherouter.png'
import Dial from '../images/cipherinner.png'
import './CaesarCipher.css'

const CaesarCipherView = (props) => {
  const { handleShiftChange, handleChange, handleSubmit} = props;
  document.title = "Caesar Cipher";
  return (
    <div>

      <h1>Caesar Cipher </h1>

      <div class="grid-container" id="caesar">
        <div class="grid-item">
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Initial Text
          </label>
          <br />

          <textarea
            type="text"
            name="initial"
            rows="10"
            cols="50"
            required={true}
            onChange={(e) => handleChange(e)}
          />

          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Number of shifts(to the right):{" "}
          </label>
          <input
            type="number"
            name="numOfShifts"
            required={true}
            steps="1.0"
            min="0"
            max="26"
            onChange={(e) => handleShiftChange(e)}
          />

          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Enable Animation
          </label>
          <br/>
          <input
            type="radio"
            name="animation"
            value="on"
            onChange={(e) => handleChange(e)}
          />
          <label> on</label>
            <br/>
            <input
              type="radio"
              name="animation"
              value="off"
              onChange={(e) => handleChange(e)}
            />
            <label> off</label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>

        <div class="grid-item">
          <div class="parent">
          <img class="base" src={CaesarCipher} alt="Dial"  width="400" height="400"/>
          <img id = "lettersid" class="letters" src={Dial} alt="Dial"  width="340" height="340"/>
          </div>
        </div>

        <div class="grid-item">
          <b>Encrypted text:</b>
          <div class="encryptedbox" style={{ overflow: "auto"}}>
            <br /> <h3 id="p1">Secret message</h3>
          </div>
        </div>
      </div>
      <br></br>
      <Link to={"/Articles/SubsitutionCipher"}>
        Learn more about Caesar Cipher
      </Link>
      <br></br>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
};

export default CaesarCipherView;
