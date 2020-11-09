import React, { useEffect, useState } from 'react';
import {questions} from '../component/CountriesData';
console.log(questions);

const API = "https://restcountries.eu/rest/v2/all";
const FLAG_API = "https://restcountries.eu/data/hnd.svg";
const CAPITAl = "https://restcountries.eu/rest/v2/capital/{capital}";
const EESTI = "https://restcountries.eu/rest/v2/name/eesti";
// https://restcountries.eu/rest/v2/name/eesti
// https://restcountries.eu/rest/v2/name/united

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleCLick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }


    return (
        <>
            <h1>Country Quiz App</h1>
            <div>
                {showScore ? (
                    <div> Your score is {score} out of {questions.length}</div>
                ) : (
                        <div>
                            <div>
                                <span>Question {currentQuestion + 1} / {questions.length}</span>
                            <p>{questions[currentQuestion].questionText}</p>
                            </div>
                            <div>
                                {questions[currentQuestion].enswerOptions.map(enswer => (
                                    <button key={enswer.answerText} onClick={() => handleCLick(enswer.isCorrect)}>{enswer.answerText}</button>
                                ))}
                            </div>
                        </div>
                    )}

            </div>
        </>
    )
}

export default App;