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
                    <span className="btn_value">A</span>{country.answers[0]}</button>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[1]}>
                    <span className="btn_value">B</span>{country.answers[1]}</button>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[2]}>
                    <span className="btn_value">C</span>{country.answers[2]}</button>
                <button 
                className="answer_btn"
                onClick={handleClick} 
                value={country.answers[3]}>
                    <span className="btn_value">D</span>{country.answers[3]}</button>
            </form>
        </main>
    )
}

export default DisplayQuiz;
