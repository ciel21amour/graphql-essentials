import { Friends } from './dbConnectors';

// resolver map
export const resolvers = { 
    Query : {
        getFriend : (root, {id}) => { 
            return Friends.findById(id);
        }
    },
    Mutation : {
        createFriend : (root, {input}) => {
            const newFriend = new Friends({ 
                firstName : input.firstName, 
                lastName : input.lastName, 
                gender : input.gender, 
                language : input.language,
                email : input.email, 
                age : input.age, 
                contacts : input.contacts});
            
            newFriend.id = newFriend._id;
            
            return new Promise((resolve, object) => {
                newFriend.save(err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(newFriend);
                    }
                });
            })
        }
    },
};