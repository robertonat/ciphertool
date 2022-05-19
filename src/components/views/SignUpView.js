import "./LoginView.css"
const SignUpView = (props) => {
  document.title = "Sign Up";
  const {  handleChange, handleSubmit } = props;
  return (
    <div>
      <div class="userbox">
      <h3>Sign up</h3>
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label id="userloglabel" htmlFor="userName">User Name</label>
          <input id="userloginput" type="text" name="username" required={true} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label id="userloglabel" htmlFor="userName">Email</label>
          <input id="userloginput" type="text" name="email" required={true} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label id="userloglabel" htmlFor="userName">Phone Number</label>
          <input id="userloginput" type="text" name="phone" required={true} onChange={(e) => handleChange(e)} />
          <p class="passwordReqs">(10 digits no special characters)</p> <br/><br/>
        </div>

        <div>
          <label id="userloglabel" htmlFor="password">Password</label>
          <input id="userloginput" type="password" name="password" required={true} onChange={(e) => handleChange(e)} />
        </div>
        <label id="userloglabel" htmlFor="password">Repeat your password </label>
        <input id="userloginput" type="password" name="password2" required={true} onChange={(e) => handleChange(e)} />
        <p class="passwordReqs">Password minimum length: 8</p> <br/>
        <p class="passwordReqs">Requires numbers</p><br/>
        <p class="passwordReqs">Requires Special character</p> <br/ >
        <p class="passwordReqs">Requires Uppercase letters</p> <br/ >
        <p class="passwordReqs">Requires Lowercase letters</p> <br/ >
        <br></br>
        <button>Sign up</button>
      </form>
      </div>
    </div>
  );
};

export default SignUpView;
