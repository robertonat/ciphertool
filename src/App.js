import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";

///////Components

//Containers for base pages
import {
  HomePageContainer,
  CaesarCipherContainer,
  ArticlesContainer,
  LogInContainer,
  SignUpContainer,
  VigenereCipherContainer,
  RC4Container,
  UserProfileContainer,
  DESContainer,
  Account
} from './components/containers';

//Files for the Articles
import{
  RC4Article,
  EncryptionDecryption,
  SubsitutionCipher,
  Quiz0,
  RC4Quiz
} from './components/articles'

// Routing for the website overall
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/Caesar-Cipher" component={CaesarCipherContainer} />
        <Route exact path="/DES" component={DESContainer} />
        <Route exact path="/Articles" component={ArticlesContainer} />
        <Route exact path="/Login" component={LogInContainer} />
        <Route exact path="/Signup" component={SignUpContainer} />
        <Route exact path="/Vigenere-Cipher" component={VigenereCipherContainer} />
        <Route exact path="/Articles/EncryptionDecryption" component={EncryptionDecryption} />
        <Route exact path="/Articles/SubsitutionCipher" component={SubsitutionCipher} />
        <Route exact path="/Articles/RC4Article" component={RC4Article} />
        <Route exact path="/Articles/RC4Quiz" component={RC4Quiz} />
        <Route exact path="/Articles/Quiz0" component={Quiz0} />
        <Route exact path="/UserProfile/:id" component ={UserProfileContainer}/>
        <Route exact path="/RC4-Cipher" component={RC4Container} />
      </Switch>
    </div>
  );
}

export default App;
