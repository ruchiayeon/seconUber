import { Options } from "graphql-yoga";
import app from "./app";


const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options ={
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Port open ${PORT}`);

app.start(appOptions,handleAppStart); // app.start 함수는 콜백함수도 받을 수 있다. AND options의 파라미터와 콜백 파라미터를 가진다. 

//콜백에는 물음표가 붙어있다. == 콜백함수가 있어도되고 없어도 된다는의미임.