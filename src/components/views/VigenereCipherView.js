import { Link } from 'react-router-dom';
import "./ColumnLayout.css";
const VigenereCipherView = (props) => {
  const {handleChange, handleSubmit} = props;
  document.title = "Vigenere Cipher"
  return(

    <div>


        <h1>Vigenere Cipher</h1>
        <div class="grid-container">
          <div class="grid-item">
            <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Initial Text </label>
                <br/>
                <textarea type="textarea" name="initial" rows="10" cols="50" required="true" onChange={(e) => handleChange(e)}/>
                <br/>
                <br/>
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Key: </label>
                <input type="text" name="key" required="true" onChange={(e) => handleChange(e)}/>
                <br/>
                <br />
                <label style={{ color: "#11153e", fontWeight: "bold" }}>
                Enable Animation
                </label>
                <br/>
                <input type="radio" name = "animation" value="on" onChange={(e) => handleChange(e)}/>
                <label> on</label>
                <br/>

                <input type="radio" name = "animation" value="off" onChange={(e) => handleChange(e)}/>
                <label> off</label>
                <br/>
                <br/>
                <button>
                  Submit
                </button>
            </form>
          </div>
          <div class="grid-item">
            <b>Encrypted text:</b>
            <div class="encryptedbox" style={{ overflow: "auto"}}>
              <h3 id="p1">Secret message</h3>
            </div>
          </div>
        </div>
        <br></br>
        <Link to={'/Articles/SubsitutionCipher'}>
        Learn more about Vigenere Cipher
        </Link>
        <br></br>
        <Link to={'/'} >
            Home Page
        </Link>
        </div>

  )
}


export default VigenereCipherView;
