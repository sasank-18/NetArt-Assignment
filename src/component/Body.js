import React from 'react'
import MainPage from './MainPage'
import Product from './Product'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='body'>
        <MainPage/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default Body