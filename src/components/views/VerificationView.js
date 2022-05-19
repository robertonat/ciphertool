
const VeriticationView = (props) => {
const {verificationSubmit, skipVerification} = props;
document.title = "User profile";
return (
  <div>
  <h1> Please verify your identity</h1>
  <p> We've sent a code to your phone number. Please enter it to continue </p>
  <form onSubmit={(e) => verificationSubmit(e)}>
    <div>
      <label id="userloglabel" htmlFor="email">Verification Code</label>
      <input id="userloginput" type="text" name="verificationCode"/>
    </div>
  </form >
  <button onClick={(e) => skipVerification(e)}>Skip verification </button> <p>(purely for testing/twilio limitation purposes) </p>
  </div>
)
}
export default VeriticationView;
