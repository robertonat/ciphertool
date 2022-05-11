import {Link} from 'react-router-dom';
import SideNavigation from '../views/SideNavigation';
import "./article.css"
const RC4Article = (props) => {
	document.title = "Encryption Decryption Article"
	let RC4ArticleView = () => {
		return(
		<html lang="en">
			<head>
				<link rel="article" href="article.css"></link>
			    <meta charset="UTF-8" />
			    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
			    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
			    <title>RC4 Stream Cipher</title>
			</head>
			<body>

			    <h1>Stream Cipher - RC4</h1>

			    <div class="artpar">
					The RC4 stream cipher, designed by Ron Rivest in 1987, was historically used for securing Web traffic (in the SSL/TLS protocol) and wireless traffic (in the 802.11b WEP protocol). It is designed to operate on 8-bit processors with little internal memory. While RC4 is still in use, it has
			        been shown to be vulnerable to a number of significant attacks and should not be used in new projects. RC4 stream cipher is one of the most widely used stream ciphers because of its simplicity and speed of
			        operation. It is a variable key-length stream cipher with byte-oriented operations. It uses either 64 bit or 128-bit key
			        sizes.
			    </div>
				<br></br>
			    <div class="artpar">RC4 is part of the family of ciphers known as Stream Ciphers. Stream Ciphers work by using a Pseudo-Random
			        Generator (PRG) to generate <i>L</i>-bit length keys using a smaller <i>l</i>-bit length seed.
			        A PRG is an efficient, deterministic algorithm that, given as input a seed <i>s</i>, computes an output
			        <i>r</i>.
			        The pseudorandom stream that RC4 generates is as long as the plaintext stream. By performing the XOR operation
			        using the generated key and the plaintext, the result is the ciphertext.
			    </div>

			    <h2>Encryption/Decryption Process</h2>

			    <h3>What does the encryption procedure look like for RC4? </h3>
			    <div class="artpar">
					1. First, the user enters a plaintext file and an encryption key.<br/>
			        2. Then, the RC4 encryption engine generates keystream bytes with the help of the Key Scheduling Algorithm and the
			        Pseudo-Random Generation Algorithm. <br/>
			        3. The XOR operation is executed byte-by-byte, and the byte output is the ciphertext. </div>

			    <h3>How to decrypt RC4?</h3>
			    <div class="artpar">The ciphertext can be decrypted using the same method used to encrypt the plaintext. Decryption is achieved by
			        doing the same byte-wise XOR operation on the ciphertext using the key. </div>



			    <h2>Variants of the RC4 cipher</h2>
				<p>There are 4 variants to the regular RC4 cipher:</p>
			    <ul>
			        <li>Spritz – Spritz is used to create cryptographic hash functions and deterministic random bit generator.</li>
			        <li>RC4A – This is a variant that was proposed to be faster and stronger than the average RC4 cipher. RC4A was
			            found to have not truly random numbers used in its cipher.</li>
			        <li>VMPC – Variably Modified Permutation Composition (VMPC) is a version of RC4 that was found to have not truly
			            random numbers used in its cipher, like RC4A.</li>
			        <li>RC4A+ – RC4A+ is an advanced version of RC4A that is longer and more complex than RC4 and RC4A, but is
			            stronger as a result of its complexity as well.</li>
			    </ul>


			    <h2>Considerations</h2>
			    <div class="artpar">
			        RC4 was initially used in many applications, like SSL/TLS and WEP, until severe vulnerabilities were found in
			        RC4 in 2003 and 2013. As RC4 was used in WEP, attackers had a chance to practice cracking it as often as they
			        wished.
			        With this practice, a flaw was found in RC4 where the encryption key used by RC4 could be cracked in less than a
			        minute. RC4 keys can come in sizes of 64 or 128-bits, and the 128-bit key is able to be obtained in seconds.
			        At the time, WEP was the only security protocol used for Wi-Fi, so the next phase, Wi-Fi Protected Access (WPA),
			        had to be rushed for use.
			    </div>

			    <h3>Advantages and Disadvantages</h3>

			    <h4>Advantages</h4>
			    <ul>
			        <li>RC4 stream ciphers are simple to use.</li>
			        <li>The speed of operation in RC4 is fast as compared to other ciphers.</li>
			        <li>RC4 stream ciphers are strong in coding and easy to implement.</li>
			        <li>RC4 stream ciphers do not require more memory.</li>
			        <li>RC4 stream ciphers are implemented on large streams of data.</li>
			        <li>RC4 is extremely simple to use, thus making the implementation simple as well.</li>
			        <li>RC4 is fast, due to its simplicity, which makes it a better performing cipher.</li>
			        <li>RC4 also works with large streams of data swiftly and easily.</li>
			    </ul>


			    <h4>Disadvantages</h4>
			    <ul>
			        <li>If RC4 is not used with strong MAC then encryption is vulnerable to a bit-flipping attack.</li>
			        <li>RC4 stream ciphers do not provide authentication.</li>
			        <li>RC4 algorithm requires additional analysis before including new systems.</li>
			        <li>RC4 stream ciphers cannot be implemented on small streams of data.</li>
			        <li>RC4 fails to discard the beginning of output keystream or fails to use non-random or related keys for the
			            algorithm.</li>
			        <li>The vulnerabilities found in RC4 means RC4 is extremely insecure, so very few applications use it now.</li>
			        <li>RC4 cannot be used on smaller streams of data, so its usage is more niche than other stream ciphers.</li>
			        <li>RC4 also does not provide authentication, so a Man in the Middle attack could occur, and the RC4 cipher user
			            would be none the wiser.</li>
			    </ul>
				<br></br>
			</body>
			<strong><Link to={"/Signup"}>Create an account</Link> or <Link to={"/Login"}>Log in</Link> to test your knowledge of RC4 with this quiz</strong>

			</html>

)
}
		return(
			<div>
			<SideNavigation/>
			{RC4ArticleView()}
			<br></br>
		      <Link to={"/"}>Home Page</Link>
			</div>
		)
}
export default RC4Article;
