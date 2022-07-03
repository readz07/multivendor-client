import React from 'react';
import Banners from '../Banners/Banners';
import Categories from '../Categories/Categories';
import FlashSale from '../FlashSale/FlashSale';
import NewArrival from '../NewArrival/NewArrival';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <>
            <Banners/>
            <Stats/>
            <NewArrival/>
            <Categories/>
            <FlashSale/>
        </>
    );
};

export default Home;