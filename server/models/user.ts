import { IUser } from "../schemas/user.model";
import { getCollection } from "./mongo-connection";

export class User {
    async getUser(): Promise<IUser> {
        const userCol = await getCollection('user');
        const res: IUser[] = await userCol.find().toArray();
        return res[0];
    }

    // async postUser(user: IUser){
        
    // }
}