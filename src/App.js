import React,{useState} from 'react';
import Toolbar from './component/Toolbar/Toolbar.js';
import Sidebar from './component/SideDrawer/SideDrawer';
import Hello from './component/Hello/Hello';
import About from './component/About/About';
import Lan from './component/Language/Language';

import t from './App.css';
function App() {
  const [ P, sP] = useState(
    {
      showP: false
    }
  );
  const toggler= k => {
    let n = P.showP;
    sP({
      showP:!n
    })
  }
  let random;
  if(P.showP)
  {
    random = <Sidebar con={toggler}/>
  }
  return (
    <div style={{height: '100%', OverflowEvent: 'hidden'}} >
      <Toolbar click={toggler}/>
      <div style={{marginTop: '60px'}} >
      <Hello  />
      <img src={require('./w3.jpg')} alt="ft" width='100%'></img>
      
      <About />
      <Lan></Lan>
      
      </div>
     
      {random}
      
    </div>
  );
}

export default App;
