import "./LoginView.css"
const LogInView = (props) => {
  document.title = "Log In";
  const {handleChange, handleSubmit } = props;
  return (
    <div>
      <div class="userbox">
      <h3>Log In</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label id="userloglabel" htmlFor="email">Email</label>
          <input id="userloginput" type="text" name="email" onChange={(e) => handleChange(e)}  required/>
        </div>
        <div>
          <label id="userloglabel" htmlFor="password">Password </label>
          <input id="userloginput" type="password" name="password"  onChange={(e) => handleChange(e)} required />
        </div>
        <button>Log In</button>
      </form>
      </div>
    </div>
  );
};

export default LogInView;
