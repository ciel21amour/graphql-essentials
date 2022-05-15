import { makeExecutableSchema } from '@graphql-tools/schema';
import {resolvers} from './resolvers';

const typeDefs = 
    ` type Friend {
        id : ID
        firstName : String
        lastName : String
        gender : Gender
        language : String
        email : String
        age : Int
        contacts : [Contact]
    }

    type Contact {
        firstName : String
        lastName : String
    }

    type Alien {
        id : ID
        firstName : String
        lastName : String
        planet : String
    }


    input ContactInput {
        firstName : String
        lastName : String
    }

    input FriendInput {
        id : ID
        firstName : String
        lastName : String
        gender : Gender
        language : String
        email : String
        age : Int
        contacts : [ContactInput]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }
    
    type Query {
        getOneFriend(id : ID) : Friend
        getAliens : [Alien]
    }

    type Mutation {
        createFriend(input : FriendInput) : Friend
        updateFriend(input : FriendInput) : Friend
        deleteFriend(id : ID) : String
    }

    `;

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema};