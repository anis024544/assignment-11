import React from 'react';
import DisplayOffer from '../DisplayOffer/DisplayOffer';
import FavouritePart from '../FavouritePart/FavouritePart';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Home from '../Home/Home';
import OfferBanner from '../OfferBanner/OfferBanner';
import ReviewSection from '../ReviewSection/ReviewSection';
import SearchArea from '../SearchArea/SearchArea';

const Main = () => {
    return (
        <div>
            <Header />
            <SearchArea />
            <Home />
            <HeroSection />
            <FavouritePart />
        
        <DisplayOffer />
        
        <ReviewSection/>
        <OfferBanner />
        </div>
    );
};

export default Main;