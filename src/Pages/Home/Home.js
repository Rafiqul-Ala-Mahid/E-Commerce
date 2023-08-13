import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import useTitle from '../../Title/useTitle';

const Home = () => {
    useTitle('Home');
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <About></About>
      </div>
    );
};

export default Home;