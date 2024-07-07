import React from 'react';
import { REPORTS_DATA, STATS_REPORT_TYPE } from './constants';
import { formatAmount } from '../../utils/commonUtils';
import TrendUpIcon from "./images/trend-up.svg";
import TrendDownIcon from "./images/trend-down.svg";
import "./styles.css";


const StatsTab:React.FC<{report: STATS_REPORT_TYPE, index: number}> = ({report, index}) => {

    return (
        <div className={`${index % 2 === 0 ? "bg-[#F9FEF0]" : "bg-[#DBE6F2]"} statsContainer h-32 rounded-[16px] p-6`}>
            <div className='text-black font-semibold mb-2'>{report.name}</div>
            <div className='flex items-center justify-between'>
                <div className='text-black font-semibold text-3xl'>{report.revenueCurrency}{formatAmount(report.totalRevenue)}</div>
                <div className='flex items-center justify-center'>
                    <span>{report.trend === "up" ? "+" : "-"}</span>
                    <span>{report.percentChange}</span>
                    <img src={report.trend === "up" ? TrendUpIcon : TrendDownIcon} alt="trend" className='h-5 w-5 ml-2'/>
                </div>
            </div>
        </div>
    )
}



// Stats component which renders tabs component
const Stats:React.FC = () => {
    return (
        <div className="statsWrapper flex items-center justify-between my-8 relative z-10">
        {
            REPORTS_DATA.map((report: STATS_REPORT_TYPE, index: number)=><div key={report.name} className='reportsTabMap'><StatsTab report={report} index={index}/></div>)
        }
        </div>
        
    )
}


export default Stats;