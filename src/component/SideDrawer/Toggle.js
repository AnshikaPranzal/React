import React from 'react';
import bt from './Toggle.css';
const toggle = t => (
    <button onClick={t.clicked} className={bt.toggler}>
        <div className={bt.line}></div>
        <div className={bt.line}></div>
        <div className={bt.line}></div>
    </button>
);

export default toggle;