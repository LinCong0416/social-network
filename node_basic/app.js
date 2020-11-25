//EXAMPKE 1
// const {sum} = require('./helper');
// const http = require('http');
//
//
// const server = http.createServer((req,res) => {
//     res.end("hello Liner Babynp");
// })
//
// server.listen(3000);
//
// const total = sum(100,200);
// console.log("TOTAL:", total);

//EXAMPLE 2
// const express = require('express')
// const app = express()
//
// qpp.get('/',(req, res) => {
//     res.send("hello express")
// })
//
// app.listen(3000);

//EXAMPLE 3
// const fs = require('fs')
// const fileName = "target.txt"
// // fs.watch(fileName, () => console.log("File Changed"))
//
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })
//
// console.log("Node js async Example 3")

//EXAMPLE 4
// const fs = require('fs')
// const fileName = "target.txt"
//
// const data = fs.readFileSync(fileName)
//
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })
//
// console.log(data.toString())
//
// console.log("Node js sync Example 4")


//EXAMPLE 5
// const fs = require('fs')
// const fileName = "target.txt"
//
// const errHandler = err => console.log(err)
// const dataHandler = data => console.log(data.toString());
//
// ;
//
// fs.readFile(fileName, (err, data) => {
//     if (err) errHandler(err);
//     dataHandler(data);
// })

// console.log("Node js Example 5")








// const:const定义的变量不可以修改，而且必须初始化
// var:定义的变量可以修改，如果不初始化会输出undefined，不会报错。
// let: 是块级作用域，函数内部使用let定义后，对函数外部无影响