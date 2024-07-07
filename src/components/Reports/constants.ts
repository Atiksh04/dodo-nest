import { formatAmount } from "../../utils/commonUtils"
import { ApexOptions } from "apexcharts";
import { GRAPH_OPTION } from "./types";

// Data for revenue line graph.
 const REVENUE_TABLE_OPTIONS: ApexOptions =  {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      zoom:{
        enabled: false
      }
    },
    stroke: {
      width: [4, 0, 0],
      colors: ["#526062"],
      curve: 'smooth' as const
    },
    markers:{
        colors: ["#526062"],
        strokeColors:  ["#526062"],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      tickAmount: 3,
      min: 0,
      max: 30000000,
      stepSize: 10000000,
      labels:{
        show: true,
        formatter: (val: number)=> `$${formatAmount(val)}`
      }
    }
}
// revenue graph series
 const REVENUE_TABLE_SERIES:ApexOptions["series"] = [
    {
      name: "Revenue",
      type: "line",
        data: [10000000, 14000000, 16000000, 16000000, 18000000, 23000000,25000000]
    }
]
 const REVENUE_GRAPH_DATA: GRAPH_OPTION = {
    option: REVENUE_TABLE_OPTIONS,
    series: REVENUE_TABLE_SERIES
}



// Data for transaction line graph.
 const TRANSCATION_OPTIONS: ApexOptions =  {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      zoom:{
        enabled: false
      }
    },
    stroke: {
      width: [4, 0, 0],
      colors: ["#526062"],
      curve: 'smooth' as const
    },
    markers:{
        colors: ["#526062"],
        strokeColors:  ["#526062"],
    },
    xaxis: {
      categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      tickAmount: 3,
      min: 0,
      max: 15000,
      stepSize: 5000,
      labels:{
        show: true,
        formatter: (val: number)=> `${formatAmount(val)}`
      }
    }
}
 const TRANSCATION_SERIES:ApexOptions["series"] = [
    {
      name: "Transactions",
      type: "line",
    data: [4900, 6200, 7000, 6900, 8000, 10500,13290]
    }
]
 const TRANSCATION_GRAPH: GRAPH_OPTION = {
    option: TRANSCATION_OPTIONS,
    series: TRANSCATION_SERIES
}

// Data for referrer bar column graph.
 const REFERRER_SERIES: ApexAxisChartSeries = [
    {
        name: "Referrers",
        type: "bar",
        data: [
            {
                x: 'Youtube',
                y: 200000,
                fillColor: '#526062'
            },
            {
                x: 'Twitter',
                y: 235000,
                fillColor: '#EF8E5B'
            },
            {
                x: 'Reddit',
                y: 210000,
                fillColor: '#0B6468'
            },
            {
                x: 'IndieHacker',
                y: 100000,
                fillColor: '#526062'
            }
        ]
    }
];
 const REFERRER_OPTIONS:ApexOptions = {
    chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        },
        zoom:{
          enabled: false
        }
      },
      stroke: {
        curve: 'smooth' as const
      },
      markers:{
          colors: ["#526062"],
          strokeColors:  ["#526062"],
      },
      xaxis: {
        categories:['Youtube', 'Twitter', 'Reddit', 'IndieHacker'],
        labels: {
            show: true 
        }
      },
      plotOptions:{
        bar: {
            borderRadius: 4,
            columnWidth: "30%",
            distributed: true, 
            dataLabels:{
                position:"top"
            }
        }
      },
      yaxis: {
        tickAmount: 3,
        min: 0,
        max: 300000,
        stepSize: 100000,
        labels:{
          show: true,
          formatter: (val: number)=> `${formatAmount(val)}`
        }
      },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
      },
    colors: ['#526062', '#EF8E5B', '#0B6468', '#526062']
}
 const REFERRER_GRAPH: GRAPH_OPTION = {
    option: REFERRER_OPTIONS,
    series: REFERRER_SERIES
}

// Data for transaction volumne donut graph.
 const TRANSACTION_VOLUME_SERIES: ApexOptions["series"] = [38.6, 22.5, 30.8, 8.1];
 const TRANSACTION_VOLUME_OPTIONS: ApexOptions = {
    chart: { type: "donut" },
    legend: {
        show: true,
        position: "right",
        offsetY: 10, 
        itemMargin: {
            horizontal: 10,
            vertical: 5
        },
        markers: {
            radius: 12
        }
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    fill: {
        colors: ["#0B6468", "#EF8E5B", "#526062", "#C5FA58"]
    },
    states: {
        hover: { filter: { type: "lighten", value: 0.5 } },
        active: { filter: { type: "none", value: 0 } }
    },
    stroke: { width: 0 },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "60%",
                labels: {
                    show: false,
                    name: { show: false },
                   
                }
                }
        }
    },
    labels: ["United States   38.6%", "Canada    22.5%", "Europe    30.8%", "Other    8.1%"]
};
 const TRANSACTION_VOLUME_GRAPH: GRAPH_OPTION = {
    option: TRANSACTION_VOLUME_OPTIONS,
    series: TRANSACTION_VOLUME_SERIES
}


export {
  REVENUE_GRAPH_DATA,
  REFERRER_GRAPH,
  TRANSACTION_VOLUME_GRAPH,
  TRANSCATION_GRAPH
}