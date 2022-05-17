import { Link } from 'react-router-dom';

const RC4View = (props) => {
const {handleChange, handleSubmit, encrypted} = props;
document.title = "RC4View";
  return (
    <div>
    <h1>RC4 Cipher</h1>
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
        <b>Encrypted Hexadecimal text:</b>
        <div class="encryptedbox" style={{ overflow: "auto"}}>
          <h3 id="p1"></h3>
        </div>
      </div>
    </div>
    <br></br>
    <Link to={'/Articles/RC4Article'}>
    Learn more about RC4
    </Link>
    <br></br>
    <Link to={'/'} >
        Home Page
    </Link>
    </div>
  );
};
export default RC4View;
