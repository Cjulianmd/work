import React from 'react';
import CardsContains from '../components/CardsContains';
import Header from '../components/Header';
import Historys from '../components/Historys';
import MenuApp from '../components/MenuApp';

const Home = () => {
    return (
        <div>
            <Header />
            <Historys />
            <CardsContains />
            <MenuApp />
        </div>
    );
}

export default Home;
