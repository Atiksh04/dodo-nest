import React, { useState } from "react";
import User from "./images/user.svg";
import Dot from "./images/dot.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { HELP_ROUTES, NAVIGATION_ROUTES, ROUTE_TYPE } from "./constants";
import DropDownIcon from "./images/arrow-dropdown.svg";
import LinkIcon from "./images/link.svg";
import PaymentLogo from "./images/payment-logo.svg";
import CloseIcon from "./images/close.svg";

// rendering components for individual navigation route
const NavigationRoute: React.FC<{ route: ROUTE_TYPE,  toggleNavigation: (value: boolean) => void }> = ({ route, toggleNavigation }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const location = useLocation();
  const currentPage = location.pathname;
  const isSelected = currentPage === route.routePath;
  const navigate = useNavigate();

  const handleRouteClick = () => {
    if (route.hasDropdown) setShowDropdown(() => !showDropdown);
    else if (route.routePath && route.isNavigationAllowed) {
      navigate(route.routePath);
      toggleNavigation(false);
    }
  };

  return (
    <>
      <div
        className={`flex items-center py-2 pr-2 my-1 cursor-pointer ${
          isSelected ? "bg-[#1C1C1C0D] rounded-lg" : ""
        }`}
        onClick={handleRouteClick}
      >
        <div
          className={`h-6 w-1.5 pl-2 rounded-md ${
            isSelected ? "bg-[#1C1C1C]" : ""
          }`}
        ></div>
        {route.hasDropdown ? (
          <img
            src={DropDownIcon}
            alt="dropdown"
            className={`h-4 w-4 mr-2 ${showDropdown ? "rotate-90" : ""}`}
          />
        ) : (
          <div className="h-3.5 w-3.5 mr-1.5"></div>
        )}
        <img src={route.icon} alt={route.name} className="h-5 w-5 mr-2" />
        <div className="text-black">{route.name}</div>
      </div>
      {showDropdown ? (
        <div>
          {route.dropdownOptions.map((option, index) => (
            <div className="ml-16 mb-2" key={option}>
              {option}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

// rendering components for navigation route
const HelpRoute: React.FC<{ route: ROUTE_TYPE }> = ({ route }) => {
  return (
    <div className="flex items-center py-2 px-2 mb-1">
      <img src={LinkIcon} alt="link" className="h-4 w-4 mr-2" />
      <img src={route.icon} alt={route.name} className="h-5 w-5 mr-2" />
      <div className="text-black">{route.name}</div>
    </div>
  );
};


// rendering navigation list 
const NavigationList: React.FC<{
  isMobile: boolean;
  toggleNavigation: (value: boolean) => void;
}> = ({ isMobile, toggleNavigation }) => {
  return (
    <div className="h-full w-full px-[1.42rem] relative">
      <div className="h-[4.85em] w-full flex items-center justify-start">
        <img src={User} alt="user-icon" />
        <div className="font-normal ml-[0.87rem]">Superstars AI</div>
      </div>

      <div className="h-[7.42rem] w-full mb-6">
        <div className="flex items-center justify-between mb-4 pr-8">
          <div className="text-[#1C1C1C66]">Favorites</div>
          <div className="text-[#1C1C1C33]">Recently</div>
        </div>
        <div>
          <div className="flex h-8 items-center">
            <img src={Dot} alt="dot" className="mr-[0.5rem] text-black" /> Get
            Started
          </div>
          <div className="flex h-8 items-center">
            <img src={Dot} alt="dot" className="mr-[0.5rem] text-black" />
            Transactions
          </div>
        </div>
      </div>

      <div className="max-h-[65%] overflow-y-auto">
        <div className="h-auto">
          <div className="text-[#1C1C1C66] ml-4">Pages</div>
          {NAVIGATION_ROUTES.map((route, index) => (
            <div className="w-full" key={index}>
              <NavigationRoute route={route} toggleNavigation={toggleNavigation}/>
            </div>
          ))}
        </div>

        <div className="h-auto mt-8">
          <div className="text-[#1C1C1C66] ml-4">Pages</div>
          {HELP_ROUTES.map((route, index) => (
            <div className="w-full" key={index}>
              <HelpRoute route={route} />
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute left-[2.8rem] bottom-[3rem]"
      >
        <img
          src={PaymentLogo}
          alt="payment-logo"
          className="w-[10.42rem] h-[2.28rem]"
        />
      </div>
      {isMobile ? (
        <div className="absolute top-5 right-8">
          <img
            className="h-6 w-6"
            onClick={() => toggleNavigation(false)}
            src={CloseIcon}
            alt="close"
          />
        </div>
      ) : null}
    </div>
  );
};
const Navigation: React.FC<{
  isMobile: boolean;
  isShowNavigation: boolean;
  toggleNavigation: (value: boolean) => void;
}> = ({ isMobile, isShowNavigation, toggleNavigation }) => {
  return (
    <>
      <>
        {isMobile ? (
          isShowNavigation ? (
            <div className="w-full absolute z-50 h-[100vh] bg-[#F5F7F7]">
              <NavigationList
                isMobile={isMobile}
                toggleNavigation={toggleNavigation}
              />
            </div>
          ) : null
        ) : (
          <div className="w-[15.75rem]">
            <NavigationList
              isMobile={false}
              toggleNavigation={toggleNavigation}
            />
          </div>
        )}
      </>
    </>
  );
};

export default Navigation;
