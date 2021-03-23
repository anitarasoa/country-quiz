import React from "react";
import Svg from '../undraw_winners_2.svg';

function TryAgain({ tryTheGameAgain, score }) {

    return (
        <div className="container result">
            <div className="result_image__container">
                <img className="result_image" src={Svg} alt="You won" />
            </div>
            <h1 className="result_heading">Results</h1>
            <p className="result_p">You got <span className="result_score">{score}</span> correct answers</p>
            <button type="button" className="result_btn" onClick={tryTheGameAgain}>Try again</button>
        </div>
    )
}

export default TryAgain;