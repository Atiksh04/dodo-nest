// TransactionList.tsx
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { TRANSACTION_DATA, TRANSACTION_TYPE } from './constants'; // Adjust the import path as necessary

const ITEMS_PER_PAGE = 10; // Number of items per page

const TransactionList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState<string>('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    // Filter transactions
    const filteredTransactions = TRANSACTION_DATA.filter((transaction:TRANSACTION_TYPE) => 
        filterType === 'All' || transaction.type === filterType
    );

    // Sort transactions
    const sortedTransactions = filteredTransactions.sort((a, b) => {
        const timeA = new Date(a.time).getTime();
        const timeB = new Date(b.time).getTime();
        
        return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
    });

    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTransactions = sortedTransactions.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

    const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilterType(event.target.value);
        setCurrentPage(1); // Reset to the first page when filter changes
    };

    const handleSortChange = (order: 'asc' | 'desc') => {
        setSortOrder(order);
    };

    const handlePageChange = (event: MouseEvent<HTMLButtonElement>) => {
        const page = Number(event.currentTarget.dataset.page);
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <label htmlFor="filter" className="mr-2">Filter by type:</label>
                <select
                    id="filter"
                    value={filterType}
                    onChange={handleFilterChange}
                    className="border border-gray-300 p-2 rounded"
                >
                    <option value="All">All</option>
                    <option value="Credit">Credit</option>
                    <option value="Refund">Refund</option>
                </select>
            </div>

            <div className="mb-4">
                <button
                    onClick={() => handleSortChange('asc')}
                    className={`mr-2 px-4 py-2 rounded ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Sort by Time (Asc)
                </button>
                <button
                    onClick={() => handleSortChange('desc')}
                    className={`px-4 py-2 rounded ${sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Sort by Time (Desc)
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {currentTransactions.map((transaction:TRANSACTION_TYPE) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded shadow-sm">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                                {/* Placeholder for icon */}
                                <span className="text-white text-lg font-bold">{transaction.type[0].toUpperCase()}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-800 font-semibold">{transaction.id}</span>
                                <span className="text-gray-600">{transaction.country}</span>
                            </div>
                        </div>
                        <div className="text-gray-500">{new Date(transaction.time).toLocaleString()}</div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-between">
                <button
                    onClick={handlePageChange}
                    data-page={currentPage - 1}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handlePageChange}
                    data-page={currentPage + 1}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TransactionList;
