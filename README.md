## DODO

### This is deployed on - 
https://beamish-belekoy.netlify.app/

### To run this project -
- Hit npm install
- Then, npm start

### Libaray used -
React JS, Typescript, Tailwind CSS, React router dom and react-apexcharts for charts implementation.

### Things done in this repo - 
- Made responsive dashbaord as per figma
- Charts are created with mock data
- On navigation panel currently these routes are functional 
    - Overview
    - Transactions
    - Settings
- On header section, clicking on notification icon opens up the notification panel
- Transaction page shows dummy data and has features like: 
    - Pagination
    - Sorting according to date
    - Filter based on transaction type
- On settings page, I'm fetching dummy user data from "https://dummyjson.com/users".
- Basic form validation is setted up on settings page. eg: phone number validation
- On submit of form I'm updating user data using this update api: "https://dummyjson.com/users"

### Design and development process -
- I've divided the whole page into NavigationPanel(left side), common header, main content(center one) and notification panel
- Every page has components only for the center part as navigation panel, header and notification panel are handled by the layout component itself
- Everything is driven by mock data defined in constant files for each component
- Navigation panel is rendering the list and on click redirecting. Based on the list created inside a constant file
- Notification panel is also doing the same. Based on the list created inside a constant file
- For home component I'm rendering stats as well has graph from mock data defined in constant file
- For transaction page similar mock data has been used
- Basic idea is to seperate all the mock data in constants so that if in future I need to show dynamic data it can be easily replaced


### Things left -
- Test Cases
- Dark mode
- Handling search(on homepage) and other sections on navigation panel.
- Virtualisation of transactions list

Couldn’t pick these because of the time constraint.
  
