import {ConnectionOptions} from "typeorm";

require("dotenv").config()

const connectionOtions: ConnectionOptions = {
    type: "mysql",
    database: "secondUber",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT, //실제 운영중인 서버에 업로드 하려면 실데 환경 변수를 입력 해야한다. --> AWS주소 같은것 
    port: 8889,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD 
};

export default connectionOtions;
