import React from 'react'
import './widgetSm.css'
import {Visibility} from "@material-ui/icons"
import Eman  from '../../images/Eman.jpeg'

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={Eman} alt="" className="widgetSmImg" />
                     <div className="widgetSmUser">
                         <span className="widgetSmUsername">Eman M.Mostafa</span>
                         <span className="widgetSmUserTitle">FrontEnd Developer</span>
                     </div>
                     <button className="widgetSmButton">
                         <Visibility className="widgetSmIcon" />
                         Display
                     </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Eman} alt="" className="widgetSmImg" />
                     <div className="widgetSmUser">
                         <span className="widgetSmUsername">Sara Asharf</span>
                         <span className="widgetSmUserTitle">BackEnd Developer</span>
                     </div>
                     <button className="widgetSmButton">
                         <Visibility className="widgetSmIcon" />
                         Display
                     </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Eman} alt="" className="widgetSmImg" />
                     <div className="widgetSmUser">
                         <span className="widgetSmUsername">Kholoud Salama</span>
                         <span className="widgetSmUserTitle">junior accounter</span>
                     </div>
                     <button className="widgetSmButton">
                         <Visibility className="widgetSmIcon" />
                         Display
                     </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Eman} alt="" className="widgetSmImg" />
                     <div className="widgetSmUser">
                         <span className="widgetSmUsername">Menna Ahmed</span>
                         <span className="widgetSmUserTitle">Web Developer</span>
                     </div>
                     <button className="widgetSmButton">
                         <Visibility className="widgetSmIcon" />
                         Display
                     </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Eman} alt="" className="widgetSmImg" />
                     <div className="widgetSmUser">
                         <span className="widgetSmUsername">Salma Ramzy</span>
                         <span className="widgetSmUserTitle">Dentist </span>
                     </div>
                     <button className="widgetSmButton">
                         <Visibility className="widgetSmIcon" />
                         Display
                     </button>
                </li>
               
            </ul>

            
        </div>
    )
}

export default WidgetSm
