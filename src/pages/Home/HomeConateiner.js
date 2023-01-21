import React from 'react';
import Navbar from '../Shered/Navbar/Navbar';
import Banner from './Banner';
import HomeServices from './HomeServices';

const HomeConateiner = () => {
    return (
        <div>
            <Banner/>
            <HomeServices/>
        </div>
    );
};

export default HomeConateiner;