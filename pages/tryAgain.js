import React from "react";
import useCountry from '../useCountry';

function TryAgain() {
    const { goodGuess, fetchCountries } = useCountry();

    return (
        <div>
            <h1>Results</h1>
            <p>Your score: {goodGuess} please try again</p>
            <button onClick={() => fetchCountries()}>Try again</button>
        </div>
    )
}

export default TryAgain;