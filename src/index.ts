import { Options } from "graphql-yoga";
import app from "./app";
import {createConnection} from "typeorm";
import connectionOtions from "./ormConfig";
import dotenv from "dotenv";

require("dotenv");

const result = dotenv.config()
 
if (result.error) {
  throw result.error
}


const PORT: number | string = process.env.PORT || 3000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options ={
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Port open ${PORT}`);

createConnection(connectionOtions).then(()=>{
    app.start(appOptions,handleAppStart); 
}).catch(error => console.log(error));// app.start 함수는 콜백함수도 받을 수 있다. AND options의 파라미터와 콜백 파라미터를 가진다. 

//콜백에는 물음표가 붙어있다. == 콜백함수가 있어도되고 없어도 된다는의미임.

//추가로 데이터 베이스를 연결을 먼저 한뒤에 앱을 실행하도록 함. `