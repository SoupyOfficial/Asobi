import React from 'react';
import Home from '../components/Home';
import NavBar from '../components/NavBar';

const HomePage = () =>
{
    return(
        <>
        <NavBar/>
        <div className='primaryBackground'>
            <Home/>
        </div>
        </>
    );
};
export default HomePage;