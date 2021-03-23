import React from 'react';
import Svg from '../undraw_adventure_4hum1.svg';

function DisplayQuiz({ countries, handleClick, disabled, letters, btnRef }) {

    const mapLetters = letters.map((letter, i) => <span className="letters" key={i}>{letter}</span>);

    const {capital, flag, question, answers, correctAnswer} = countries;

    return (
        <main>   
            <img className="adventure" src={Svg} alt="Images"/>
            <div className="question_content">
                {question && question.question1 
                    ?   <h3 className='question first_question__heading'>{capital} {question && question.question1}</h3> 
                    :   <div className="next_qestion">
                            <img className='question-image' src={flag} alt={capital} />
                            <h3 className='question second_question__heading'>{question && question.question2}</h3>
                        </div>
                }
            </div>
            <div className="button_container">
                {answers && answers.map((option, i) => (
                    <button key={i} className="answer_btn" 
                        value={option} 
                        onClick={handleClick}
                        disabled={disabled}
                        ref={correctAnswer === option ? btnRef : null }>
                        {mapLetters[i]} {option}
                    </button>
                ))}
            </div>
        </main>
    )
}

export default DisplayQuiz;
