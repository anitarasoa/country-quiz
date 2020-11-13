import React from 'react';
import Svg from '../undraw_adventure_4hum1.svg';

function DisplayQuiz({ country, handleClick }) {

    return (
        <main>
            <img className="adventure" src={Svg} alt="Images"/>
            <div>
                {country.question.question1 ?
                    <h3 className='question'>{country.capital} {country.question.question1}</h3> :
                    <div><img className='question-image' src={country.flag} alt={country.capital} /><h3 className='question'>{country.question.question2}</h3></div>
                }
            </div>
            <form>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[0]}>
                    A <span className="btn_value">{country.answers[0]}</span></button>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[1]}>
                    B <span className="btn_value">{country.answers[1]}</span></button>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[2]}>
                    C <span className="btn_value">{country.answers[2]}</span></button>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[3]}>
                    D <span className="btn_value">{country.answers[3]}</span></button>
            </form>
        </main>
    )
}

export default DisplayQuiz;
