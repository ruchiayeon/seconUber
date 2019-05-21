import { Resolvers } from "../../../types/resolvers";
import { FacebookConnectResponse, FacebookConnectMutationArgs } from "src/types/graphql";

const resolvers: Resolvers ={
    Mutation:{
        FacebookConnect: async(_,args:FacebookConnectMutationArgs):Promise<FacebookConnectResponse> => {
            try{

            }catch(error){

            }
        }
    }
};

export default resolvers;