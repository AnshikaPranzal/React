import React from 'react';

import h from './Hello.css';
 
  let clss=[];
  clss.push(h.hl);
  const disa= () => {
    
    clss.push(h.nem)
  }
  const some=() => console.log('gh');
const hl = lo => (
   
   <div className={clss.join('')} onScroll={disa} ><p>HE<br></br>LLO<span>.</span></p>
   
   </div>
     
);

export default hl;