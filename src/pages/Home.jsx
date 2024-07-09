import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Review from '../components/Review'
import Productdetail from '../components/Productdetail'
import Menu from '../components/Nav'

const Home = () => {
  return (
    <>
    {/* <Menu/> */}
    <Header/>
    <Productdetail/>
    <Review/>
    <Footer/>
    </>
  )
}

export default Home