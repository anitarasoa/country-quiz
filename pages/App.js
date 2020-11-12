import React from 'react';
import CountryFlag from './CountryFlag';
import { Route, Switch } from 'react-router-dom';
import TryAgain from '../pages/tryAgain';
import useCountry from '../useCountry';
import Header from '../component/Header';

function App() {
    const { fetchCountries } = useCountry();
    
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/">
                <CountryFlag />
            </Route>
            <Route path="/result">
                <TryAgain fetchCountries={fetchCountries} />
            </Route>
        </Switch>
        </>
    )
}

export default App;