import React, { useEffect, useState } from 'react';
import OverviewIcon from "./images/overview.svg";
import StarIcon from "./images/stars.svg";
import { useLocation } from 'react-router-dom';
import SearchIcon from "./images/search.svg";
import CommandIcon from "./images/command.svg";
import LightModeIcon from "./images/light-mode.svg";
import HistoryIcon from "./images/history.svg";
import NotificationIcon from "./images/notification.svg";
import SlideWindowIcon from "./images/slide-window.svg";
import DropdownMenuIcon from "./images/menu.svg";

const Header:React.FC<{isMobile:boolean, toggleNavigation: (value: boolean) => void, toggleNotification: () => void,}> = ({isMobile,toggleNavigation, toggleNotification})=>  {

    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>("");

    useEffect(()=>{
        let pathName = location?.pathname;

        if(pathName === "/"){
            setCurrentPage("Overview");
        } else {
            pathName = pathName.split("/")?.[1];
            const name = pathName.split("")[0].toUpperCase() + pathName.slice(1)
            setCurrentPage(name);
        }

    }, [location]);


  return (
    <div className='flex items-center h-[4.85rem] border-b border-[#1C1C1C1A] w-full p-4'>
      { isMobile && <div onClick={()=> toggleNavigation(true)}>
        <img src={DropdownMenuIcon} alt="menu" className='h-6 w-6 mr-2'/>
      </div>
        }
      
      <div className='flex items-center justify-between w-full'>
      <div className='flex items-center'>
        {!isMobile && <img src={OverviewIcon} alt="overview" className='w-6 h-6 mr-3'/>}
        {!isMobile && <img src={StarIcon} alt="overview" className='w-7 h-7 mr-3'/>}
        <div className={`px-2 flex items-center ${isMobile ? "mr-3" : ""}`}>
            <div className='text-[#1C1C1C66]'>Pages</div>
            <div className='text-[#1C1C1C66] mx-3'>/</div>
            <div className='text-black'>{currentPage}</div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className={`bg-[#1C1C1C0D] rounded-lg h-8 flex items-center px-2 mr-4 ${isMobile ? "w-[7.42rem]" : "w-[11.42rem]"}`}>
            <img src={SearchIcon} alt="search" className='h-4 w-4 mr-2'/>
            <div className='text-[#1C1C1C33] w-[7.85rem]'>Search</div>
            <img src={CommandIcon} alt="search" className='h-5 w-5'/>
        </div>
        <img src={LightModeIcon} alt="mode-changer" className='w-8 h-8 mr-3'/>
        <img src={HistoryIcon} alt="mode-changer" className='w-8 h-8 mr-3'/>
        <img src={NotificationIcon} alt="mode-changer" className='cursor-pointer w-8 h-8 mr-3' onClick={toggleNotification}/>
        {!isMobile && <img src={SlideWindowIcon} alt="mode-changer" className='w-8 h-8 mr-3'/>}
      </div>
      </div>
    </div>
  );
};

export default Header;
