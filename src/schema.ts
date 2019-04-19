import {makeExecutableSchema} from "graphql-tools";
import path from "path";
import {fileLoader,mergeResolvers,mergeTypes} from "merge-graphql-schemas";

const allTypes :any[] = fileLoader(
    path.join (__dirname, "./api/**/*.graphql") //api폴더안에 있는 모든 grphql파일 모두 Load하기 
);   //allTypes에 Query Mutaiton .. 모든 타입이 담기고 상수 타입은 graphqlSchema의 배열이 된다. 그리고 fileLoader에 다 담는다.  

const allResolvers :string[]= fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers:any = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
});//makeExecutableSchema는 allTypes와 같이 schema를 하나로 합쳐주는 역할을 함 

export default schema;


//여기에서는 API를 불러오고 (graphql/resolvers)그리고 하나로 합치는 과정을 만듬 
