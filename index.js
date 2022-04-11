import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.listen(8000, () => {
    console.log('listening on http://localhost:8000/graphql');
});