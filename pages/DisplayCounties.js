import React from 'react';
import useCountry from '../useCountry';
import DisplayQuiz from '../component/DisplayQuiz';
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
        showScore,
        setIsCorrect,
        setShowScore,
        letters,
        btnRef,
        disabled,
        loading
    } = useCountry();

    return (
        <>
            {showScore
                ? (<TryAgain score={score} tryTheGameAgain={tryTheGameAgain} />)
                : (
                    <DisplayQuiz
                        countries={countries}
                        handleClick={handleClick}
                        letters={letters}
                        btnRef={btnRef}
                        disabled={disabled}
                        loading={loading}
                        handleShowBtn={handleShowBtn}
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                        setShowScore={setShowScore}
                        isShow={isShow}
                    />
                )
            }
        </>
    )
}

export default DisplayCountries;