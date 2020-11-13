import React from "react";

function TryAgain({ tryTheGameAgain, score }) {

    return (
        <div className="container result">
            <h1 className="result_heading">Results</h1>
            <p className="result_p">You got <span className="result_score">{score}</span> correct answers</p>
            <button className="result_btn" onClick={tryTheGameAgain}>Try again</button>
        </div>
    )
}

export default TryAgain;