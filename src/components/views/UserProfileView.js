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

      <div class="progressBox">
        <strong class="progressText">Continue Learning</strong>
        <br />
        <span class="line"></span>
        <br/>


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
