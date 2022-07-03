import React from 'react';
import Banners from '../Banners/Banners';
import NewArrival from '../NewArrival/NewArrival';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <>
            <Banners/>
            <Stats/>
            <NewArrival/>
        </>
    );
};

export default Home;