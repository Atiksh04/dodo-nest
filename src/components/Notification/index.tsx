import React, { useEffect } from "react";
import { NOTIFICATION_LIST, NOTIFICATION, ACTIVITIES_LIST } from "./constants";
import CloseIcon from "./images/close.svg";

// notificaiton list component
const NotificationsList: React.FC = () => {
  return (
    <div className="w-full mt-8 mb-4">
      {NOTIFICATION_LIST.map((notificaiton: NOTIFICATION, index: number) => (
        <div 
        key={index}
        >
          <div
            className="flex items-start justify-start w-full mb-4"
          >
            <img src={notificaiton.icon} alt="icon" className="w-8 h-8 mr-3" />
            <div className="flex-1 min-w-0">
              <div className="text-black whitespace-nowrap overflow-hidden text-ellipsis">
                {notificaiton.notification}
              </div>
              <div className="text-[#1C1C1C66]">{notificaiton.time}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// activities list component
const ActivityList: React.FC = () => {
  return (
    <div>
      <div className="text-left text-black font-semibold mt-6 mb-7">
        Activities
      </div>
      <div className="relative">
        <div className="absolute z-[52]">
          {ACTIVITIES_LIST.map((notificaiton: NOTIFICATION, index: number) => (
            <div key={index}>
              <div className="flex items-start justify-start w-full mb-3">
                <div className="h-10 relative">
                  <img
                    src={notificaiton.icon}
                    alt="icon"
                    className="w-8 h-8 mr-3"
                  />
                  {index !== ACTIVITIES_LIST.length - 1 && (
                    <div className="bg-[#1C1C1C22] h-[0.75rem] w-px absolute top-10 left-4 z-[51]"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-black whitespace-nowrap overflow-hidden text-ellipsis">
                    {notificaiton.notification}
                  </div>
                  <div className="text-[#1C1C1C66]">{notificaiton.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Notifications: React.FC<{
  isMobile: boolean;
  toggleNotification: (value: boolean) => void;
}> = ({ isMobile, toggleNotification }) => {
  useEffect(() => {
    if (!isMobile) {

      // setting css variables which will be used for width calculation 
      // in overview reports and graphs
      const root = document.getElementById("root") as HTMLElement;
      root.style.setProperty("--reduceOverview", "8rem");
      root.style.setProperty("--reduceStats", "5rem");
    }

    return () => {
      // adding clear function
      const root = document.getElementById("root") as HTMLElement;
      root.style.removeProperty("--reduceOverview");
      root.style.removeProperty("--reduceStats");
    };
  }, [isMobile]);

  return (
    <div
      className={`${
        isMobile
          ? "w-full absolute z-50 h-full bg-[#F5F7F7] p-8"
          : "h-full w-[20rem] border-l p-8"
      }`}
    >
      <div className="text-left text-black font-semibold ">Notifications</div>
      <NotificationsList />
      <ActivityList />
      {isMobile ? (
        <div className="absolute top-5 right-8">
          <img
            className="h-6 w-6"
            onClick={() => toggleNotification(false)}
            src={CloseIcon}
            alt="close"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Notifications;
