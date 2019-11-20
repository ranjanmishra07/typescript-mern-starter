import {  userModel, IUser } from "../schemas/user.model";

export class User {
    // // static userCollection = userModel.collection;
    db: IUser = new userModel();
    // constructor(db: IUser) {
    //     this.db = db;
    // }
    async getUsers() {
         const users = await userModel.collection.find().toArray();
         return users;
    }
    createUser(user: IUser) {
        console.log('user incoming', user);
        userModel.create(user).then(() => console.log('saved user')).catch(e=> console.log('err in saving', e));
    }
}