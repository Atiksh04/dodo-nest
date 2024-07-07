import React from "react";
import LineReport from "./lineReport";
import BarReport from "./barReport";
import DonutReport from "./donutReport";
import { REFERRER_GRAPH, REVENUE_GRAPH_DATA, TRANSACTION_VOLUME_GRAPH, TRANSCATION_GRAPH } from "./constants";


// rendering graph components accordingly
const Reports: React.FC = ()=> {
    return(
        <div className="h-auto w-full bg-[#F5F7F7] pt-2">
            <div className="flex items-center justify-between reportContainer">
                <LineReport graphDetails={REVENUE_GRAPH_DATA} type="Revenue"/>
                <LineReport graphDetails={TRANSCATION_GRAPH} type="Number of Transcations"/>
            </div>
            <div className="flex items-center justify-between reportContainer">
                <BarReport graphDetails={REFERRER_GRAPH} type="Transaction Value by Referrer (in $)"/>
                <DonutReport graphDetails={TRANSACTION_VOLUME_GRAPH} type="% Transaction Volume by Location"/>
            </div>
        </div>
    )
}

export default Reports;