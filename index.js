import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';


const friendDatabase = {};

class Friend {
    constructor(id, {firstName, lastName, gender, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}


const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

// resolver
const root = { friend : () => {
    return { 
        "id" : 567,
        "firstName" : "Amreen",
        "lastName" : "Shaikh",
        "gender" : "Female",
        "email" : "amreen.shaikh.21.05@gmail.com"}
    }, 
    createFriend : ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);

    }
};

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('listening on http://localhost:8000/graphql');
});