const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
const dotenv = require('dotenv')
const fs = require('fs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator');
dotenv.config()
const postRoutes = require("./routes/post")
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const cors = require('cors')

//apiDocs
app.get('/', (req, res) => {
    fs.readFile('docs/apiDocs.json', (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        }
        const docs = JSON.parse(data);
        res.json(docs);
    })
})

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
    console.log(`DB connection error: ${err.message}`);
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
app.use(cookieParser());
app.use(cors());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/",userRoutes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({error: "Unauthorized!"});
    }
});


const  port = process.env.PORT || npm8080;
app.listen(port, () => {console.log(`Node JS API is listening on: ${port}`)});
