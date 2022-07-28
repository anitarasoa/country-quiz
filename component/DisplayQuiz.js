import React from 'react';
import Svg from '../undraw_adventure_4hum1.svg';
import NextButton from './NextButton';

function DisplayQuiz({ countries, handleClick, disabled, letters, btnRef, loading, isShow, handleShowBtn, isCorrect, setIsCorrect, setShowScore}) {
    
    const mapLetters = letters.map((letter, i) => <span className="letters" key={i}>{letter}</span>);
    
    let question1 = countries && countries[0]?.question?.question1;
    let question2 = countries && countries[0]?.question?.question2;
    let capital = countries && countries[0]?.capital;
    let flag = countries && countries[0]?.flag?.png;

    return (
        <div className={`container ${question1 ? "first_question" : "second_question"}`}>   
            <img className="adventure" src={Svg} alt="Images"/>
            {loading ? (<div className="loading_container"><h3 className="loading_heading">Fetching a new quiz</h3><div class="spinner"></div></div>) : (
                <div>
                    <div className="question_content">
                        {question1 
                            ?   <h3 className='question first_question__heading'>{capital} {question1}</h3> 
                            :   <div className="next_qestion">
                                    <img className='question-flag' src={flag} alt={capital} />
                                    <h3 className='question second_question__heading'>{question2}</h3>
                                </div>
                        }
                    </div>
                    <div className="button_container">
                        {countries && countries[0]?.answers.map((option, i) => (
                            <button key={i} className="answer_btn" 
                                value={option?.common} 
                                onClick={handleClick}
                                disabled={disabled}
                                ref={countries && countries[0]?.correctAnswer?.common === option?.common ? btnRef : null }
                            >
                                {mapLetters[i]} {option?.common}
                            </button>
                        ))}
                        {isShow && (<NextButton
                            handleShowBtn={handleShowBtn}
                            isCorrect={isCorrect}
                            setIsCorrect={setIsCorrect}
                            setShowScore={setShowScore}
                        />)}
                    </div>
                </div>)
            }
        </div>
    )
}

export default DisplayQuiz;
