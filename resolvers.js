const friendDatabase = {};

class Friend {
    constructor(id, {firstName, lastName, gender, email, age, contacts}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.age = age;
        this.contacts = contacts;
    }
}

// resolver map
export const resolvers = { 
    Query : {
        getFriend : (_, {id}) => { 
            return new Friend(id, friendDatabase[id])
        }
    },
    Mutation : {
        createFriend : (_, {input}) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            console.log(input);
            friendDatabase[id] = input;
            return new Friend(id, input);
    
        }
    },
};