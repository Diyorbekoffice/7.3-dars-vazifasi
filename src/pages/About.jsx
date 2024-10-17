import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../assets/iPhoneico.png';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <LazyLoadImage src={image} alt="About" />
    </div>
  );
};

export default About;
