import React from 'react';
import {Link} from 'react-router-dom';

function NextButton(props) {
    const { handleShowBtn, isShow, isCorrect } = props;
    return (
        <div className="next">
            {isCorrect ?
            (isShow && (<button className="next_button" onClick={handleShowBtn}>Next</button>))
            : (isShow && (<Link to="/result"><button className="next_button">Next</button></Link>))
            }
        </div>
    )
}

export default NextButton;