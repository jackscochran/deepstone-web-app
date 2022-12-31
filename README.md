# Deepstone Quanititative Investments Web Application

Web app prototype built for the start-up I co-founded that focuses on providing investment insights by using AI and machine learning. The app is built using the client-server architecture, with the frontend and backend decoupled for code modularity. 

## Backend

The backend provides the following API's by interacting with a mongoDB database:

/company: retrieves company information for a specific ticker symbol.

/company-search: searches for companies based on a search query and returns a list of results (up to a specified number).

/trending: returns a list of trending companies within a specific date range (up to a specified number).

/financials: retrieves financial information for a specific ticker symbol and date.

/historical-financials: retrieves historical financial information for a specific ticker symbol.

/market-price: retrieves the market price for a specific ticker symbol and date.

/market-prices: retrieves historical market prices for a specific ticker symbol within a specific date range.

/register: registers a new user with the specified username, email, and password.

/login: logs in an existing user with the specified email and password.

/user-exists: checks if a user with the specified email already exists.

/delete-user: deletes an existing user with the specified email and password.


## Frontend

The frontend uses these apis to get infromation from the stock database and displays the information to the user. The features on the frontend include:

 - Ability to login and register users
 - Ability to search stocks by name or ticker
 - Ability to look at profile, price, and financial data on a given company
 - Ability to compare financial statements between companies by line item