import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList'
function App() {
  let [gallery, setGallery] = useState([])
  useEffect(() => {
    console.log('in useEffect')
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios.get('/gallery').then((response) => {
      console.log('response is ', response.data);
      setGallery(response.data)
    }).catch((err) => {
      console.log('get failed', err);
    })
  }
    return (
    
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList  gallery={gallery}/>
        <img src="images/goat_small.jpg"/>
      </div>
    
    );
   
}

export default App;
