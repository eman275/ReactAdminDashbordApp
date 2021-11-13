import React from 'react'
import './sales.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'

const Sales = () => {
    return (
        <div className="sales">
             <FeaturedInfo className="FeaturedInfo"/>
             <FeaturedInfo/>
             <FeaturedInfo/>
        </div>
    )
}

export default Sales
