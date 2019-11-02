import React from 'react';
import sb from './Sidebar.css';
import Backdrop from '../Backdrop/Backdrop';
const sidebar = props => (
   <div>
   <nav className={sb.side}>
       <ul >
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Home</a></li>
        </ul>
   </nav>
   <Backdrop back={props.con}/>
   </div>
);

export default sidebar;