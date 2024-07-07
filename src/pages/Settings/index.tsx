import React from "react"
import Settings from "../../components/Settings";


const SettingsPage: React.FC = ()=> {
// rendering settings page components 
    return(
        <div className="h-[calc(100%-4.85rem)] overflow-y-auto w-full bg-[#F5F7F7] p-8">
            <Settings/>
        </div>
    )
}

export default SettingsPage;