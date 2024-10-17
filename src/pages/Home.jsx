import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../assets/iPhoneico.png';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <LazyLoadImage src={image} alt="Home" />
    </div>
  );
};

export default Home;
