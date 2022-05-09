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


query {
  getFriend(id : "c46f45c74d42c37cd798") {
    id
    firstName
    lastName
    gender
    email
  }
}

mutation {
  createFriend(input : {
    id : 345
    firstName : "abc"
    lastName : "def"
    gender :"ghi"
    email : "klm@nop"
  } ) {
    id
    firstName
    lastName
    gender
    email
  }
}