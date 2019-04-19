import {GraphQLServer} from "graphql-yoga";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import schema from "./schema";


class App {
    public app: GraphQLServer;
    constructor(){
        this.app = new GraphQLServer({ //resolvers & query & mutation & subscriptions 필수
            schema
        });
        this.middlewares();
    } //constructor함수는 App클래스를 새로 시작할때 마다 가장 먼저 호출되는 함수(서버 시작할때 가장 먼저 들어가는 입구라고 생각합시다.)
    private middlewares = () : void => {    
        this.app.express.use(cors());
        this.app.express.use(helmet());
        this.app.express.use(logger("dev"));//morgan이라는 middleware의 사용 의미를 좀 알아야겠다. 

    }
}

export default new App().app; //class App에서 public app을 export 하시오 ! 