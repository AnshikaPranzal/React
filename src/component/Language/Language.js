import React from 'react';
import l from './Language.css';

import '../fonts.css';
const LA = t => (
   <div className={l.lang}>
       <div ><h1>LAN<span>GUAGES</span> YOU <span>KN</span>OW</h1></div>
      
       
<div className={l.clm}>
<header className={l.card1}>
  <img src= {require('./java.png')} alt="..." ></img>
  
</header>
<header className={l.card}>
  <img src= {require('./c.png')} alt="..."></img>
  
</header>
<header className={l.card}>
  <img src={require('./cpp.png')} alt="..."></img>
  </header>
  

<header className={l.card}>
  <img src={require('./js.png')} alt="..."></img>
  
</header>


</div>
  
   </div>
);

export default LA; 
