import React from 'react';
import DisplayCounties from '../pages/DisplayCounties';
import Header from '../component/Header';
import Footer from '../component/Footer';

function App() {

    return (
        <div className="main">
            <Header />
            <DisplayCounties />
            <Footer />
        </div>
    )
}

export default App;