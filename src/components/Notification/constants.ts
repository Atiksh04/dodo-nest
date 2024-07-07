import BugIcon from "./images/bug.svg";
import AnnouncementIcon from "./images/announcement.svg";
import UserIcon from "./images/user.svg";
import NetworkIcon from "./images/network.svg";

import User1 from "./images/user-1.svg";
import User2 from "./images/user-2.svg";
import User3 from "./images/user-3.svg";
import User4 from "./images/user-4.svg";
import User5 from "./images/user-5.svg";


// adding notification constants
export type NOTIFICATION =  {
    notification: string,
    time: string,
    icon: string, 
}

export const NOTIFICATION_LIST: NOTIFICATION[] = [
    {
        notification: "You have an issue that needs to be fixed.",
        time: "Just now",
        icon: BugIcon
    },
    {
        notification: "New team member joined",
        time: "59 minutes ago",
        icon: UserIcon
    },
    {
        notification: "New product feature available",
        time: "12 hours ago",
        icon: AnnouncementIcon
    },
    {
        notification: "Andi Lane subscribed to you.",
        time: "Today, 11:59 AM",
        icon: NetworkIcon
    }
]


export const ACTIVITIES_LIST: NOTIFICATION[] = [
    {
        notification: "Discount details updated",
        time: "Just now",
        icon: User1
    },
    {
        notification: "Aman added a new product",
        time: "59 minutes ago",
        icon: User2
    },
    {
        notification: "Refunds cleared",
        time: "12 hours ago",
        icon: User3
    },
    {
        notification: "Tax report download complete",
        time: "Today, 11:59 AM",
        icon: User4
    },
    {
        notification: "Product details updated",
        time: "Feb 2, 2023",
        icon: User5
    }
]