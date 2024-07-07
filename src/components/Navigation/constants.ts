import OverviewIcon from "./images/overview.svg";
import TransactionIcon from "./images/transactions.svg";
import InvoiceIcon from "./images/invoice.svg";
import CustomerIcon from "./images/customers.svg";
import CatalogIcon from "./images/catalog.svg";
import ReportIcon from "./images/reports.svg";
import CheckoutIcon from "./images/checkout.svg";
import AccountIcon from "./images/account.svg";
import SettingsIcon from "./images/settings.svg";
import DocumentationIcon from "./images/documentation.svg";
import HelpIcon from "./images/help.svg";

export type ROUTE_TYPE = {
    icon: string,
    name: string,
    routePath: string,
    isSelected: boolean,
    hasDropdown: boolean,
    dropdownOptions: string[],
    isNavigationAllowed: boolean
}

// defining navigation routes
export const NAVIGATION_ROUTES: ROUTE_TYPE[] = [
    {
        icon: OverviewIcon,
        name: "Overview",
        routePath: "/",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: true
    },
    {
        icon: TransactionIcon,
        name: "Transactions",
        routePath: "/transactions",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: true
    },
    {
        icon: InvoiceIcon,
        name: "Invoices",
        routePath: "/invoice",
        isSelected: false,
        hasDropdown: true,
        dropdownOptions: ["Overview", "Product", "Discount"],
        isNavigationAllowed: false
    },
    {
        icon: CustomerIcon,
        name: "Customers",
        routePath: "/customer",
        isSelected: false,
        hasDropdown: true,
        dropdownOptions: ["Overview", "Product", "Discount"],
        isNavigationAllowed: false
    },
    {
        icon: CatalogIcon,
        name: "Product Catalog",
        routePath: "/overview",
        isSelected: false,
        hasDropdown: true,
        dropdownOptions: ["Overview", "Product", "Discount"],
        isNavigationAllowed: false
    },
    {
        icon: ReportIcon,
        name: "Reports",
        routePath: "/reports",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: false
    },
    {
        icon: CheckoutIcon,
        name: "Checkout",
        routePath: "/checkout",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: false
    },
    {
        icon: AccountIcon,
        name: "Business Account",
        routePath: "/business-account",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: false
    },
    {
        icon: SettingsIcon,
        name: "Settings",
        routePath: "/settings",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: true
    }
]

// defining help routes
export const HELP_ROUTES: ROUTE_TYPE[] = [
    {
        icon: DocumentationIcon,
        name: "Documentation",
        routePath: "/documentation",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: false
    },
    {
        icon: HelpIcon,
        name: "Help Center",
        routePath: "/help-center",
        isSelected: false,
        hasDropdown: false,
        dropdownOptions: [],
        isNavigationAllowed: false
    }
]