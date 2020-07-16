import "reflect-metadata";
import {createConnection} from "typeorm";
import app from './app';
import "./routes"
import { webConfig } from "./config/WebConfig";


createConnection().then(connection => {
    app.listen(webConfig.PORT, () => console.log('Example app listening on port 3000!'));
}).catch(error =>
    console.log('连接出错',error)
);
