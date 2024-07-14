// import React from 'react';
// import Routing from './Routing';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import SideProfile from './Components/SideProfile';
// import './style.css';

// function App() {
//   const [theme, setTheme] = React.useState('light');

//   const toggleTheme = (selectedTheme) => {
//     setTheme(selectedTheme);
//   }

//   return (
//     <>
//       <div className={`h-screen overflow-auto ${theme === 'light' ? 'bg-[#EEEDEB] text-black' : 'bg-[#222325] text-white'}`}>
//         <div className='flex flex-col'>
//           <Navbar theme={theme} toggleTheme={toggleTheme} />
//           <div className={`h-[100%] flex flex-col md:flex-row ${theme === 'light' ? 'bg-[#EEEDEB] text-black' : 'bg-[#222325] text-white'}`}>
//             <Sidebar theme={theme} className="order-1 md:order-1" />
//             <Routing theme={theme} className="order-3 md:order-2" />
//             <SideProfile theme={theme} className="order-2 md:order-3" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import Routing from './Routing';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import SideProfile from './Components/SideProfile';
import './style.css';

function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  }

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <>
      <div className={`h-screen overflow-auto ${theme === 'light' ? 'bg-[#EEEDEB] text-black' : 'bg-[#222325] text-white'}`}>
        <div className='flex flex-col'>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <div className={`h-[100%] flex flex-col md:flex-row ${theme === 'light' ? 'bg-[#EEEDEB] text-black' : 'bg-[#222325] text-white'}`}>
            <Sidebar theme={theme} className="order-1 md:order-1" />
            <Routing theme={theme} className="order-3 md:order-2" />
            <SideProfile theme={theme} className="order-2 md:order-3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
