import React from 'react';

import b from './Backdrop.css';

const bd = l => (
   <div className={b.backdrop} onClick={l.back}></div>
);

export default bd; 
