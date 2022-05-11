import {Link} from 'react-router-dom';
import SideNavigation from '../views/SideNavigation';
import Vigenere_square from '../images/Vigenere_square.png'
import "./article.css";

const SubsitutionCipher = (props) => {
	document.title = "Substitution cipher"
	let SubsitutionCipherView = () => {
		return(
			<html lang="en">
			<head>
				<link rel="article" href="article.css"></link>
			    <meta charset="UTF-8"></meta>
			    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
			    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			    <title>Substitution cipher</title>
			</head>
			<body>
			    <h1>Substitution cipher</h1>

			    <div class="artpar"> One of the simplest forms of encryption is the substitution cipher. These ciphers encrypt plaintext by substituting alphabetic characters for other characters.
			        If the cipher uses a single alphabet for all characters in the message, then it is a monoalphabetic substitution cipher. If it uses multiple alphabets for the characters in the message,
			        then it is a polyalphabetic substitution cipher.
				</div>

			    <br></br><br></br>
			    <h2>Shift Cipher / Caesar Cipher</h2>
			    <div class="artpar">The Caesar cipher, also known as Caesar shift and shift cipher, is one of the simplest types of encryption. It is often one of the first forms of encryption that is taught because it is easy to understand.
			        The Caesar cipher is named after <i>Julius Caesar</i>, who was known for using it for protecting military messages and his personal correspondence.
			        This cipher works by taking each letter in a message and shifting it by a number of places in the alphabet. With a shift of 3 , A becomes D, B becomes E, etc. </div>

			    <h4>Here is an example of what those alphabets look like:</h4>
				<div class="example">
					<div class="line"> Plain alphabet: <code>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</code></div>
			    	<div class="line"> Shift: 7</div>
			    	<div class="line"> Shift alphabet: <code>H I J K L M N O P Q R S T U V W X Y Z A B C D E F G</code></div>
				</div>

				<br></br><br></br>
			    <h4>Encrypting a message using this shift of 7 results in:</h4>
				<div class="example">
					<div class="line"> Plaintext:  <code>Remember to mute your mic</code></div>
			    	<div class="line"> Ciphertext: <code>Yltltily av tbal fvby tpj</code></div>
				</div>
				<br></br><br></br>
			    <div class="artpar">To decipher the ciphertext, you shift each letter in the ciphertext by <strong>7</strong>, the shift used to encrypt, in the opposite direction. So <strong>D</strong> becomes <strong>A</strong>, <strong>E</strong> becomes <strong>B</strong>, etc.</div>

			    <br></br><br></br>
			    <h2>ROT13</h2>

			    <div class="artpar">A popular version of the shift cipher is ROT13 ("ROT" = “rotate”) which shifts the alphabet by <strong>13</strong> places. ROT13 is frequently used in online forums, puzzles, etc.</div>

			    <h4>Here's an example:</h4>
				<div class="example">
					<div class="line">Plain alphabet: <code>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</code></div>
					<div class="line">Shift: 13</div>
					<div class="line">Shift alphabet: N O P Q R S T U V W X Y Z A B C D E F G H I J K L M</div>
					<div class="line">Plaintext: Remember to mute your mic</div>
					<div class="line">Ciphertext: Erzrzore gb zhgr lbhe zvp</div>
				</div>
			<br></br><br></br>
			    <h2>Vigenère Cipher</h2>


			    <div class="artpar">Another historical cipher is the Vigenère cipher, named after <i>Blaise de Vigenère</i>, is a version of a substitution cipher known as a polyalphabetic substitution cipher. These ciphers apply a series of caesar ciphers based on the letters of a keyword or phrase.</div>
				<br></br><br></br>
			    <div class="artpar">To encrypt, we use what is called a Vigenère square or Vigenère table. It has the alphabet written out 26 different times in different rows with each alphabet being shifted
			    cyclically to the left compared to the previous alphabet. This represents the 26 possible Caesar ciphers.</div>
				<br></br>
			    <img src={Vigenere_square} height="400px" width="400px" alt=""/>
				<br></br><br></br>
				<div class="clearbox">
			    <h4>Let's say we have plaintext to be encrypted:</h4><code>bagofmilk</code>
			    <h4>The person sending the message chooses a keyword and repeats it until it matches the length of the plaintext, for example, the keyword "STRAW":</h4>
				<code>STRAWSTRA</code>
				</div>
				<br></br><br></br>

			    <div class="artpar">Each row starts with a key letter. The rest of the row holds the letters A to Z (in shifted order). Although there are 26 key rows shown,
			        a code will use only as many keys (different alphabets) as there are unique letters in the key string, here just 5 keys: </div>
				<br></br>
			    <code>S, T, R, A, W</code>
				<br></br><br></br>
			    <div class="artpar">For successive letters of the message, successive letters of the key string will be taken and each message letter enciphered by using its corresponding key row.
			        The next letter of the key is chosen, and that row is gone along to find the column heading that matches the message character. The letter at the intersection of [key-row, msg-col] is the enciphered letter.</div>

				<br></br>
			    <div class="artpar">For example, the first letter of the plaintext, <strong><i>b</i></strong>, is paired with <strong><i>S</i></strong>, the first letter of the key. Therefore, row <strong>S</strong> and column <strong>B</strong> of the Vigenère square are used, producing ciphertext <strong>T</strong>. Similarly, for the second letter of the plaintext, the second letter of the key is used. The letter at row <strong>T</strong> and column <strong>A</strong> is <strong>T</strong>. The rest of the plaintext is enciphered in a similar fashion:</div>
			    <br></br><br></br>
				<div class="example">
				<div class="line"><code>Plaintext: bagofmilk</code></div>
			    <div class="line"><code>Key: STRAWSTRA</code></div>
			    <div class="line"><code>Ciphertext: TTXOBEBCK</code></div>
				</div>
				<br></br><br></br>
			    <div class="artpar">Decryption is performed by going to the row in the table corresponding to the key, finding the position of the ciphertext letter in that row and then using the column's label as the plaintext. <br></br>
			        For example, in row <strong>S</strong> (from <i>STRAW</i>), the ciphertext <strong>T</strong> appears in column <strong>B</strong>, so <strong><i>b</i></strong> is the first plaintext letter. Next, in row <strong>T</strong> (from <i>STRAW</i>), the ciphertext <strong>T</strong> is located in column <strong>A</strong>. Thus <strong><i>a</i></strong> is the second plaintext letter.</div>
			<br></br>
			</body>
			<strong><Link to={"/Signup"}>Create an account</Link> or <Link to={"/Login"}>Log in</Link> to test your knowledge of subsitution ciphers with this quiz</strong>
			</html>
	)
}
return(
	<div>
	<SideNavigation/>
	{SubsitutionCipherView()}
	<Link to={'/'} >
			Home Page
	</Link>
	<br/>
	<br/>
	</div>
)
}
export default SubsitutionCipher;
