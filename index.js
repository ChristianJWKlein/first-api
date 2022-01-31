//Lets build our first express API
//bring express library in
const express = require("express");

//create Express API called App.  Amazing
const app = express();

//Now we must give list of request it can handle
app.get("/", (request, response) => {
  response.send("My first API.... works!"); //will be shown on http://localhost:3000/
}); //any request to this address, we are going to send it something
//api packages request and response together to ensure delivery to right requester.

//Now we need to allow the api tto listen...open up on port to listen to the requests, also takes
//optional call back function.
app.listen(3000, () => console.log("Listening on port 3000..."));
