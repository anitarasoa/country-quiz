import React from 'react';
import useCountry from '../useCountry';


function CountryCapital() {
    const { randomOptions, userIsWin, randomCountry, goodGuess, checkWin, fetchCountries } = useCountry();

    return (
        <div className="container">

            <>
                <h1>Country Quiz</h1>
                <div>
                    <div>
                        <h2>{randomCountry.capital} is the capital of ?</h2>
                    </div>
                    <h2>{userIsWin === true ? 'You guess right! ' : ''}
                        {userIsWin === false ? 'You guess wrong. ' : ''}
                        Score:{goodGuess}
                    </h2>
                </div>
                <form onClick={(e) => checkWin(e)}>
                    <button className="btn-random" value={randomOptions[0]}>A {randomOptions[0]}</button>
                    <button className="btn-random" value={randomOptions[1]}>B {randomOptions[1]}</button>
                    <button className="btn-random" value={randomOptions[2]}>C {randomOptions[2]}</button>
                    <button className="btn-random" value={randomOptions[3]}>D {randomOptions[3]}</button>
                </form>
                <button className="next" onClick={() => fetchCountries()}>Next</button>
            </>
        </div>
    )
}

export default CountryCapital;