import React from 'react';
import useCountry from '../useCountry';
import DisplayQuiz from './DisplayQuiz';
import NextButton from './NextButton';
import TryAgain from './Result';

function DisplayCountries() {
    const {
        countries,
        handleClick,
        handleShowBtn,
        isShow,
        isCorrect,
        tryTheGameAgain,
        score,
        showScore
    } = useCountry();

    return (
        <>
            {showScore
                ? (<TryAgain score={score} tryTheGameAgain={tryTheGameAgain} />)
                : (
                    <div className="container">
                        {countries.map(country => (
                            <DisplayQuiz key={country.capital}
                                country={country}
                                handleClick={handleClick}
                            />
                        ))}
                        {isShow && (<NextButton
                            handleShowBtn={handleShowBtn}
                            isCorrect={isCorrect}
                        />)}
                    </div>
                )
            }
        </>
    )
}

export default DisplayCountries;