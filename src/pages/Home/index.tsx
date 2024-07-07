import React from "react"
import DateSelector from "../../components/DateSelector";
import Stats from "../../components/Stats";
import Reports from "../../components/Reports";


// rendering homepage components
const HomePage: React.FC = ()=> {

    return(
        <div className="h-[calc(100%-4.85rem)] overflow-y-auto w-full bg-[#F5F7F7] p-8">
            <DateSelector/>
            <Stats/>
            <Reports/>
        </div>
    )
}

export default HomePage;