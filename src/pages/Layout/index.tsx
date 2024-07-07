import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation'; 
import Header from '../../components/Header';
import "./style.css";
import Notifications from '../../components/Notification';

// Layout component common for all pages
const Layout:React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 700);
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [showNotification, setShowNotificaiton] = useState<boolean>(false);


  useEffect(() => {
    // event listener for mobile check
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleNavigation = (value: boolean)=>{
    setShowNavigation(value);
  }

  const handleToggleNotification = ()=>{
    setShowNotificaiton(!showNotification);
  }

  // rendering left side navigation, main content and right side notification panel
  // as this layout is same for all the pages
  return (
    <div className='flex bg-[var(--bg-color)] h-[100vh] w-full'>
      <Navigation isMobile={isMobile} isShowNavigation={showNavigation} toggleNavigation={handleToggleNavigation}/>
      <div className='layoutElements' style={showNotification ? {width: "calc(100% - 35.75rem)"} : {width: "calc(100% - 15.75rem)"}}>
        <Header isMobile={isMobile} toggleNavigation={handleToggleNavigation} toggleNotification={handleToggleNotification}/>
        <Outlet/>
      </div>
      {showNotification && <Notifications  isMobile={isMobile} toggleNotification={()=>setShowNotificaiton(false)}/>}
    </div>
  );
};

export default Layout;
