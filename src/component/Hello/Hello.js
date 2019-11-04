import React from 'react';

import h from './Hello.css';
 
  let clss=[];
  clss.push(h.hl);
  const disa= () => {
    
    clss.push(h.nem)
  }
const hl = lo => (
   
   <div className={clss.join('')} onScroll={disa} ><p>Hey!<br></br>there<span>.</span></p>
   
   </div>
     
);

export default hl;
