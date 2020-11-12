import React from 'react';
import useCountry from '../useCountry';
import DisplayQuiz from '../pages/DisplayQuiz';
import NextButton from '../pages/NextButton';


function CountryFlag() {
    const { countries, handleClick, toggle, handleShowBtn, isShow, isCorrect } = useCountry();

    return (
        <div className="container">
           {countries.map(country => (
               <DisplayQuiz key={country.capital} country={country} handleClick={handleClick} isCorrect={isCorrect} toggle={toggle}/>
           ))}
            <NextButton handleShowBtn={handleShowBtn} isShow={isShow} isCorrect={isCorrect} />
        </div>
    )
}

export default CountryFlag;