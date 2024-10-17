import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../assets/iPhoneico.png';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <LazyLoadImage src={image} alt="Contact" />
    </div>
  );
};

export default Contact;
