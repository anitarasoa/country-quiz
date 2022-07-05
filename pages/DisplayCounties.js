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
        showScore,
        setIsCorrect,
        setShowScore,
        letters,
        btnRef,
        disabled
    } = useCountry();

    let question = countries && countries[0]?.question?.question1;

    return (
        <>
            {showScore
                ? (<TryAgain score={score} tryTheGameAgain={tryTheGameAgain} />)
                : (
                    <div className={`container ${question ? "first_question" : "second_question"}`}>
                            <DisplayQuiz
                                countries={countries}
                                handleClick={handleClick}
                                letters={letters}
                                btnRef={btnRef}
                                disabled={disabled}
                            />
                        {isShow && (<NextButton
                            handleShowBtn={handleShowBtn}
                            isCorrect={isCorrect}
                            setIsCorrect={setIsCorrect}
                            setShowScore={setShowScore}
                        />)}
                    </div>
                )
            }
        </>
    )
}

export default DisplayCountries;