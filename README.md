# About #

This is a React application which uses Yelp Fusion API. The application allows users to search for businesses in Naperville and see more details about the selected business. 


## How to run the Application ##

- clone the app repository: git clone https://github.com/rpanch1/yelp-app.git
- navigate to the project folder: cd yelp-app/
- install dependencies: npm install


The Application uses CORS Anywhere since the Yelp API will not allow the app's frontend JavaScript code to access the 
API's responses. So you will either need to use the cors-anywhere demo server or create a local server to handle the proxy requests.


### Using the Demo Server ###
- Unlock the demo server by going to cors-anywhere.herokuapp.com and clicking the 'Request temporary access' button
- In the src/yelp-api/authentication.js file, the API requests should be prefixed by the CORS_ANYWHER url by default.
- The demo server only allows 50 requests per hour so the app will not work after those limited amount of requests. So, the alternative is to create a local server.


### Using local server ###
- clone the cors-anywhere repository: git clone https://github.com/Rob--W/cors-anywhere.git
- navigate to the folder: cd cors-anywhere/
- install dependencies: npm install
- start server: node server.js
- In the app project, go to authentication.js file and replace the prefix CORS_URL with LOCAL_HOST in the BUSINESS_SEARCH_URL variable and then save the file.


### After the demo server or the local server is setup ###
- start app: 
    npm start
