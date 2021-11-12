import React from 'react'
import './analytics.css'
import { userData } from '../../data'
 import  Chart from '../../components/chart/Chart'

export const Analytics = () => {
    return (
        <div className="analytics">
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    )
}

export default  Analytics