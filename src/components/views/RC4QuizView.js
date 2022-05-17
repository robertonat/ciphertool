import { Link } from "react-router-dom";
import "../articles/article.css";

const RC4QuizView = (props) => {
const { handleChange, handleSubmit} = props;
    document.title = "RC4 Quiz";

    return (
        <div>
            <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Unit 0 Questions</title>
            </head>
            <body>
                <div class="quiz-container">
                    <form onSubmit={(e)=> handleSubmit(e)}>

                        <div class="quiz-item">
                        <p><strong>1.</strong>Who was the designer of RC4?</p>
                        <input id = "quizinput" type="radio" value="Ronald Carson" name="Q1"  onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Ronald Carson</label><br />

                        <input id = "quizinput" type="radio" value="Rosiland Hopper" name="Q1" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Rosiland Hopper</label><br />

                        <input id = "quizinput" type="radio" value="Roe & Charlie" name="Q1" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Roe & Charlie</label><br />

                        <input id = "quizinput" type="radio" value="Ron Rivest" name="Q1"  onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Ron Rivest</label><br />
                        </div>
                        <br />

                        <br />
                        <div class="quiz-item">
                        <p><strong>2.</strong>What does RC4 utilize to create its keys?</p>
                        <input id = "quizinput" type="radio" value="Partial Random Generator" name="Q2"  onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Partial Random Generator</label><br />

                        <input id = "quizinput" type="radio" value="Pseudo Random Generator" name="Q2" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Pseudo Random Generator</label><br />

                        <input id = "quizinput" type="radio" value="Program Representation Graph" name="Q2" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Program Representation Graph</label><br />

                        <input id = "quizinput" type="radio" value="Path Recursion Generator" name="Q2"  onChange={(e) => handleChange(e)} />
                        <label id="quizlabel">Path Recursion Generator</label><br />
                        </div>
                        <br />


                        <br />
                        <div class="quiz-item">
                        <p><strong>3.</strong>Which of the following is NOT a variant of RC4?</p>

                        <input id = "quizinput" type="radio" value="Spritz" name="Q3" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Spritz</label><br />

                        <input id = "quizinput" type="radio" value="VMPC" name="Q3"  onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">VMPC</label><br />

                        <input id = "quizinput" type="radio" value="RCA" name="Q3" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">RCA</label><br />

                        <input id = "quizinput" type="radio" value="VCA" name="Q3" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">VCA</label><br />
                        </div>
                        <br />

                        <br />
                        <div class="quiz-item">
                        <p><strong>4.</strong>What is RC4 NOT commonly used for?</p>

                        <input id = "quizinput" type="radio"  value="SSL/TLS protocol" name="Q4"  onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">SSL/TLS protocol</label><br />

                        <input id = "quizinput" type="radio"  value="802.11b WEP protocol" name="Q4" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">802.11b WEP protocol</label><br />

                        <input id = "quizinput" type="radio"  value="RSA" name="Q4" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">RSA</label><br />
                        </div>
                        <br />

                        <br />
                        <div class="quiz-item">
                        <p><strong>5.</strong>What type of cipher is RC4?</p>

                        <input id = "quizinput" type="radio" value="Substitution cipher" name="Q5" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Substitution cipher</label><br />

                        <input id = "quizinput" type="radio" value="Block cipher" name="Q5" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Block cipher</label><br />

                        <input id = "quizinput" type="radio" value="Stream cipher" name="Q5" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Stream cipher</label><br />

                        <input id = "quizinput" type="radio" value="Transposition cipher" name="Q5" onChange={(e) => handleChange(e)} />
                        <label id ="quizlabel">Transposition cipher</label><br />
                        </div>
                        <br />

                        <button type="submit">Submit</button>
                    </form>
                    <p id="result"></p>
                    <br />
                </div>
                <Link to="/"> Home Page </Link>
                <br/ >
            </body>
    </div>
    );
}
export default RC4QuizView;
