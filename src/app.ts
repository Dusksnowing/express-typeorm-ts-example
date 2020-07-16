import express from "express";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// true:键值可以为任意类型；false只能为string｜array
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    next();
})

export default app
