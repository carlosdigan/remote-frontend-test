import React from 'react';
import { useProperties } from '../../hooks';
import Header from '../Header';
import PropertyListing from '../PropertyListing';
import SortAndFilter from '../SortAndFilter';
import './App.scss';

const App = () => {
    const { properties, isLoading, hasError } = useProperties();

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing properties={properties} isLoading={isLoading} hasError={hasError}/>
            </main>
        </div>
    );
};

export default App;
