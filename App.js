import React from 'react';
import DisplayCounties from './pages/DisplayCounties';
import Header from './component/Header';

function App() {

    return (
        <div className="wrapper-image">
            <div className="background"></div>
            <div className="content-continer">
                <Header />
                <DisplayCounties />
            </div>
        </div>
    )
}

export default App;