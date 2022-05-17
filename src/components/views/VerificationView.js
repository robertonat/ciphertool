
const VeriticationView = (props) => {
const {verificationSubmit} = props;
document.title = "User profile";
return (
  <div>
  <h1> Please verify your identity</h1>
  <p1> We've sent a code to your phone number. Please enter it to continue </p1>
  <form onSubmit={(e) => verificationSubmit(e)}>
    <div>
      <label id="userloglabel" htmlFor="email">Verification Code</label>
      <input id="userloginput" type="text" name="verificationCode"/>
    </div>
  </form>
  </div>
)
}
export default VeriticationView;
