import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorBondary from './components/ErrorBoundary';
import HomePage from './pages/Home';
import Layout from './pages/Layout';
import TransactionPage from './pages/Transaction';
import SettingsPage from './pages/Settings';


// routes as per react router dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBondary />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/transactions",
        element: <TransactionPage />
      },
      {
        path: "/settings",
        element: <SettingsPage />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);