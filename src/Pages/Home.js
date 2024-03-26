import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import Footer from '../Components/Footer/Footer';
import Signup from '../Components/Signup/Signup';
import Login from '../Components/Login/Login';
import View from '../Components/View/View';


function Home(props) {
  return (
    <div className='home container'>
      <Header />
      <Banner />
      <Category />
      <View />
      
    </div>
  )
}

export default Home
