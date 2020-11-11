import React from 'react';
import useCountry from '../useCountry';
import TryAgain from '../pages/tryAgain';


function CountryFlag() {
    const {
        randomOptions,
        userIsWin,
        randomCountry,
        goodGuess,
        checkWin,
        isShow,
        setIsShow,
        handleShowBtn
    } = useCountry();

    return (
        <div className="container">
            
            <>
                <h1>Country Quiz</h1>
                <div>
                    <div>
                        <img src={randomCountry.flag} />
                        <p>Which country does this flag belong to?</p>
                    </div>
                    <h2>{userIsWin === true ? 'You guess right! ' : ''}
                        {userIsWin === false ? 'You guess wrong. ' : ''}
                        Score:{goodGuess}
                    </h2>
                </div>
                <form onClick={(e) => checkWin(e)}>
                    <button onClick={() => setIsShow(!isShow)} className="btn-random" value={randomOptions[0]}>A {randomOptions[0]}</button>
                    <button onClick={() => setIsShow(!isShow)} className="btn-random" value={randomOptions[1]}>B {randomOptions[1]}</button>
                    <button onClick={() => setIsShow(!isShow)} className="btn-random" value={randomOptions[2]}>C {randomOptions[2]}</button>
                    <button onClick={() => setIsShow(!isShow)} className="btn-random" value={randomOptions[3]}>D {randomOptions[3]}</button>
                </form>
                {isShow && (
                    <button className="next" onClick={() => handleShowBtn()}>Next</button>
                )
                }
            </>
            
        </div>
    )
}

export default CountryFlag;