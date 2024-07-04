// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Card from '../../components/Card'
import Collections from './Collections'
import BestSellers from './BestSellers'
import Singleproduct from './Singleproduct'
import Newsletter from './Newsletter'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>

        <Banner />
        <Category />
        <Products />
        <Collections />
        <BestSellers />
        <Newsletter />
        <Footer />
        
        
    </div>
  
    
  )
}

export default Home
