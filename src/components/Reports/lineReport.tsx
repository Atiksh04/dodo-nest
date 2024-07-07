import React from "react";
import Chart from "react-apexcharts";
import "./styles.css";
import { GRAPH_OPTION } from "./types";


const LineReport: React.FC<{graphDetails: GRAPH_OPTION, type: string}> = ({graphDetails, type})=> {  
// rendeing react-apexcharts for line chart
    return(
        <div>
            <div className="font-semibold text-left mb-2 chartLabel">{type}</div>
              <Chart
                id="chart"
                type="line"
                series={graphDetails.series}
                options={graphDetails.option}
                className="graph"
            />
        </div>
    )
}

export default LineReport;