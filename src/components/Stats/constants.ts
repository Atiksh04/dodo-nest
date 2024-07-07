export type STATS_REPORT_TYPE = {
    name: string,
    trend: "down" | "up",
    percentChange: number,
    totalRevenue: number,
    revenueCurrency: string
}



export const REPORTS_DATA: STATS_REPORT_TYPE[] = [
    {
        name: "Revenue",
        trend: "up",
        percentChange: 11.01,
        totalRevenue: 24000000,
        revenueCurrency: "$" 
    },
    {
        name: "Transcation",
        trend: "down",
        percentChange: 0.03,
        totalRevenue: 140000,
        revenueCurrency: "$" 
    },
    {
        name: "Average Transaction",
        trend: "up",
        percentChange: 15.03,
        totalRevenue: 2000,
        revenueCurrency: "$" 
    },
    {
        name: "Refunds",
        trend: "up",
        percentChange: 6.08,
        totalRevenue: 1250,
        revenueCurrency: "$" 
    },
]