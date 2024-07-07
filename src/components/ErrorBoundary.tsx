import React from "react"

// custom error boundary implementation
const ErrorBondary: React.FC = ()=> {
    return(
        <div className="flex items-center justify-center h-full w-full">
            <div className="text-bold text-3xl">404 Not found 🚫</div>
        </div>
    )
}

export default ErrorBondary;