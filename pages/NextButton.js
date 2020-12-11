import React from 'react';

function NextButton(props) {
    const { handleShowBtn, isCorrect, setIsCorrect, setShowScore } = props;
    
    function showModal() {
        setIsCorrect(false)
        setShowScore(true)
    }

    return (
        <div className="next">
            {isCorrect ?
            (<button className="next_button" onClick={handleShowBtn}>Next</button>)
            : <button className="next_button" onClick={showModal}>Next</button>
            }
        </div>
    )
}

export default NextButton;