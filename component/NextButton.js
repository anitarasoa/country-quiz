import React from 'react';

function NextButton({ handleShowBtn, isCorrect, setIsCorrect, setShowScore }) {
    
    function showModal() {
        setIsCorrect(false)
        setShowScore(true)
    }

    return (
        <div className="next">
            {isCorrect 
                ? <button className="next_button" onClick={handleShowBtn}>Next</button>
                : <button className="next_button" onClick={showModal}>Next</button>
            }
        </div>
    )
}

export default NextButton;
