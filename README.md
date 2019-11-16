# Hot-restauraunt-cold-food

## Description

This is a full stack app. It allows the user to input their details to make a reservation for a fake restauraunt. The details are POSTed to the server and the API is populated. The guest list and wait list are dynamically populated and can be seen in the corresponding page. The raw API data can also be viewed through links.

### Functionality

This app has both a front end and back end functionality. In the front end, users can navigate between the 3 HTML pages (home, make reservation, view tables), as well as navigate to view the raw data files of the APIs. In the make reservation page the user can input their details to make a reservation. As the fake restauraunt only has 5 tables, any reservation after the fifth will be stored to the waitlist.

On the back end, the app has a working server that can handle GET and POST requests, providing information and/or adding the new reservation info to an array that is accessed through a AJAX call in the tables page, dynamically updating that page with the info from the API.

#### Structure, files, and modules

This app works from the server.js file, the html files are served from within the "public" folder, as is the main CSS stylesheet. This app uses JQuery, Bootstrap CSS, FontAwesome. Express node module.
