import React from 'react';
import './App.css';
import axios from axios;
import { useState } from react;
 import images from "./images";
import ImageCarousel from "./ImageCarousel";
import { render } from 'react-dom';

export default function App() {
  
  return (

    <div className="App">
      <ImageCarousel images={images} />
      
</div>
    )}


  
    
  


