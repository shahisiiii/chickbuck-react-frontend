import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import Signup from '../Components/Signup/Signup';
import Login from '../Components/Login/Login';
import View from '../Components/View/View';
import Footer from '../Components/Footer/Footer';


function Home(props) {
  return (
    <div className='home container'>
      <Header />
      <Banner />
      <Category />
      <View />
      <Footer></Footer>
    </div>
  )
}

export default Home
