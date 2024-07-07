import React from "react";
import Chart from "react-apexcharts";
import "./styles.css";
import { GRAPH_OPTION } from "./types";


const BarReport: React.FC<{graphDetails: GRAPH_OPTION, type: string}> = ({graphDetails, type})=> {  

    return(
        <div>
            <div className="font-semibold text-left mb-2 chartLabel">{type}</div>
              <Chart
                id="chart"
                type="bar"
                series={graphDetails.series}
                options={graphDetails.option}
                className="graph"
            />
        </div>
    )
}

export default BarReport;