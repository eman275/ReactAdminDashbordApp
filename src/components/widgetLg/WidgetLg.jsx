import React from 'react'
import './widgetLg.css'
import Avatar from '../../images/avatar.svg'
import BlueAvatar from '../../images/BlueAvatar.svg'
import Pinkavater from '../../images/pinkavater.svg'

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className="widgetLg" >
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src= {Avatar} alt="" className="widgetLgImg" />
                         <span className="widgetLgName"> Emaaaaw</span>
                    </td>
                    <td className="widgetLgDate"> 11 Nov 2021</td>
                    <td className="widgetLgAmount">$2524.00</td>
                    <td className="widgetLgStatus"> <Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src= {Pinkavater} alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Khuloud98</span>
                    </td>
                    <td className="widgetLgDate"> 11 Nov 2021</td>
                    <td className="widgetLgAmount">$2524.00</td>
                    <td className="widgetLgStatus"> <Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src= { BlueAvatar} alt="" className="widgetLgImg" />
                         <span className="widgetLgName"> kareem97</span>
                    </td>
                    <td className="widgetLgDate"> 11 Nov 2021</td>
                    <td className="widgetLgAmount">$2524.00</td>
                    <td className="widgetLgStatus"> <Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src= {Avatar} alt="" className="widgetLgImg" />
                         <span className="widgetLgName">sara95</span>
                    </td>
                    <td className="widgetLgDate"> 11 Nov 2021</td>
                    <td className="widgetLgAmount">$2524.00</td>
                    <td className="widgetLgStatus"> <Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
