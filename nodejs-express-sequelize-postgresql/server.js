const express = require ('express');
const routes = require('./app/routes/route'); // import the routes
const app = express();
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
   //  origin: "https://a753-102-16-25-180.ngrok.io:4200"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 4200, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})