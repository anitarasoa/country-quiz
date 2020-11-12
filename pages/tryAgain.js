import React from "react";
import { Link } from 'react-router-dom';
import useCountry from "../useCountry";

function TryAgain({ fetchCountries }) {
    const { score } = useCountry();

    return (
        <div className="container result">
            <h1 className="result_heading">Results</h1>
            <p className="result_p">You got <span className="result_score">{score}</span> correct answers</p>
            <Link to="/"><button className="result_btn" onClick={fetchCountries}>Try again</button></Link>
        </div>
    )
}

export default TryAgain;