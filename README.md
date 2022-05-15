# graphql-essentials
GraphQL Essentials with Node JS

Course with Linkedln Learning : 
https://www.linkedin.com/learning/graphql-essential-training/the-initial-graphql-setup

How to run : 
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0

npm install --save-dev express express-graphql graphql nodemon

npm install -g nodemon --save-dev 

nodemon ./index.js --exec babel-node -e js

Notes :

We pass a query structure defined as a string to build schema method.

to make a field mandatory, add ! at the end of the defining type of that field


npm install graphql-tools



query {
  getFriend(id : "cc41c77a72d5547aa046") {
    id
    firstName
    lastName
    age
    gender
    email
    contacts {
      firstName
      lastName
    }
  }
}

mutation {
  createFriend(input : {
    id : 567
    firstName : "am"
    lastName : "bn"
    age : 25
    email : "gh@kl"
    gender : FEMALE
    contacts : [
      {
        firstName : "pt"
        lastName : "gh"
      }
      {
        firstName : " po"
        lastName : "jk"
      }
      {
        firstName : "sd"
        lastName : "as"
      }
    ]
    
  }) {
    id
    firstName
    lastName
    gender
    email
    age
    contacts {
      firstName
      lastName
    }
  }
}


There two different ways to create and use graphql schemas.
The first one we explored earlier, now onwards, we will use graphql-tools library to write clean schema.

To install graphql-tools : 

npm install utf-8-validate@^5.0.2 bufferutil@^4.0.1 graphql@^14.7.0

npm install subscriptions-transport-ws@^0.9.0 || ^0.11.0

npm install react@^16.8.0

npm install graphql-ws@^5.5.5

npm install graphql-tools

There are couple of changes I needed to do to use graphql tools, import resolvers by following statement:  
import {resolvers} from './resolvers'; 

then use current version of graph ql tools library by using following import statement:  

import { makeExecutableSchema } from '@graphql-tools/schema'; 

and after that,  pass an extra parameter to the resolver :  

getFriend : (_, {id}) => { 
    
add that underscore as an extra empty parameter since the function definition and syntax changed over time.  Lastly, check following link for better understanding:  https://stackoverflow.com/questions/69165638/graphql-mutation-and-query-cannot-read-property-of-undefined


For data persistence, we are going to connect to the mongoDB

npm install --save-dev mongoose

install Studio 3T as GUI app for mongoDB
https://studio3t.com/download/

connection options for mongoose are not to be passed in updated version of mongoose.

https://stackoverflow.com/questions/68806347/argument-of-type-usenewurlparser-boolean-useunifiedtopology-boolean-is-n 

with updated version of mongoose, we must use node version 12 or higher.
Thus, 
nvm use 16

using findById method for query using mongo db
npm install --save-dev -g node-gyp@8.4.1
npm install --save-dev sqlite3 sequelize casual
npm install --save-dev @types/lodash
