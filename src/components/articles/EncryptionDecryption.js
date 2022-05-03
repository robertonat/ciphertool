import {Link} from 'react-router-dom';
import SideNavigation from '../views/SideNavigation';
import "./article.css"
const EncryptionDecryption = (props) => {
	document.title = "Encryption Decryption Article"
	let EncryptionDecryptionView = () => {
		return(
			<html lang="en">
			<head>
			<link rel="article" href="article.css"></link>
	    	<meta charset="UTF-8"></meta>
	    	<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
	    	<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
	    	<title>Encryption/Decryption</title>
			</head>

			<body>
	    <h1>Encryption</h1>

	    <div class="artpar"><strong>Cryptography</strong> is the practice and study of these secure communication techniques. <strong>Encryption</strong> is the original goal of cryptography. It is used to protect data at rest and data in transit from an adversarial eavesdropper.
	        Prior to being encrypted, the data is known as <strong>plaintext</strong>. In this form the data is readable and/or executable. When plaintext is encrypted, we will have <strong>ciphertext</strong>. This encrypted data is not readable nor executable.</div>
		<br></br>
	    <div class="artpar">Let's say we have three people, <i>Alice</i>, <i>Bob</i>, and <i>Eve</i>. Alice wants to send a message to only Bob, however Eve is present and able to see their messages. To solve this we use encryption to prevent any adversarial
	        eavesdropper from seeing these messages. Messages are not limited to just being purely text, they can be any data form. We can encrypt audio and video files, source code, executable files, the entire Shrek movie,
	        entire operating systems, etc. Encryption functions use what are known as <strong>keys</strong>. These keys are used by the function to encrypt the data, and how this is done differs depending on which function we use. These keys must often be kept secret
	        from eavesdroppers as, in the case of if the key is a <strong>shared key</strong>, this key is the only key that is required to be able to decrypt the ciphertext, which was encrypted with that same key.</div>
		<br></br>
	    <div class="artpar">We have an encryption function <strong>E</strong> that takes as input a key <strong>k</strong> and a plaintext message <strong>m</strong>. The output of this function is a ciphertext <strong>c</strong>:</div>
	    <br></br>
		<code>E(k, m) = c</code>
		<br></br><br></br>

	    <div class="artpar">Let's also say that prior to Eve's arrival, Alice and Bob already agreed to use the same key and encryption function to encrypt their messages. Eve knows which encryption they are using but does not know their secret key.
	        Once Alice encrypts her message and has the ciphertext, she can send it to Bob, and all Eve will see is the ciphertext. </div>

	    <h1>Decryption</h1>
	    <div class="artpar">Once Bob receives the ciphertext, he must now decrypt it using the key he shares with Alice. The decryption function must always undo encryption. This decryption function <strong>D</strong> takes as input a key <strong>k</strong> and a ciphertext <strong>c</strong>.
	        The output is a plaintext message <strong>m</strong>.</div>
		<br></br>
	    <code>D(k, c) = m</code>

	</body>
	</html>
	)
}
return(
	<div>
	<SideNavigation/>
	{EncryptionDecryptionView()}
	<br></br>
      <Link to={"/"}>Home Page</Link>
	</div>
)
}
export default EncryptionDecryption;
