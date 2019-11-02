import React from 'react';

import beh from './Coolbar.css';
import DrawerT from '../SideDrawer/Toggle';
const toolbar = p => {
    return(
        <header className={beh.toobar}>
        <nav className={beh.toolbar_navigation}>
            <div><DrawerT clicked={p.click}/></div>
        <div className={beh.toolbar_logo}><a href='/'>A Logo</a></div>
        <div className={beh.spacer}></div>
        <div className={beh.toolbar_navigationitems}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Home</a></li>
            </ul>
        </div>
        <div><i className="fas fa-address-book"></i></div>
        </nav>
        </header>
    );
    }   
    
    export default toolbar;