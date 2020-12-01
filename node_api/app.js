const express = require('express')
const app = express()
const morgan = require("morgan");

//bring in routes
const {getPosts} = require("./routes/post")

//middleware
app.use(morgan("dev"));

const myMiddleware = (req, res, next) => {
    console.log('middleware applied!');
    next();
}

app.use(myMiddleware);

app.get("/", getPosts);

const  port = 8080;
app.listen(port, () => {console.log('Node JS API is listening on 8080')});
