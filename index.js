import express from "express";
import schema from "./schema";
import { graphqlHTTP } from 'express-graphql';


const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { hello: () => "Hi, I am Amreen!"};

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('listening on http://localhost:8000/graphql');
});