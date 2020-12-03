const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator');
dotenv.config()

//db
//liner.416@gmail.com
//MONGO_URI=//mongodb://localhost/nodeapi
mongoose
    .connect(
        process.env.MONGO_URI,
        { userNewUrlParser: true}
    )
    .then(() => console.log('DB connected'))

mongoose.connection.on("error", err =>{
    console.log('DB connection error: ${err.message}');
})


//middleware


// const myMiddleware = (req, res, next) => {
//     console.log('middleware applied!');
//     next();
// }

// app.use(myMiddleware);
app.use(expressValidator());
app.use(morgan("dev"));
app.use(bodyParser.json());


//bring in routes
const getPosts = require("./routes/post")
app.use("/", getPosts);


const  port = process.env.PORT || npm8080;
app.listen(port, () => {console.log('Node JS API is listening on: ${port}')});
