import React from "react"
import TransactionList from "../../components/TransactionsList";


const TransactionPage: React.FC = ()=> {
// rendering transctions page components 
    return(
        <div className="h-[calc(100%-4.85rem)] overflow-y-auto w-full bg-[#F5F7F7] p-8">
          <TransactionList/>
        </div>
    )
}

export default TransactionPage;