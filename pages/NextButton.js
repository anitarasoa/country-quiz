import React from 'react';

function NextButton(props) {
    const { handleShowBtn, isCorrect } = props;

    return (
        <div className="next">
            {isCorrect ?
            (<button className="next_button" onClick={handleShowBtn}>Next</button>)
            : ''
            }
        </div>
    )
}

export default NextButton;