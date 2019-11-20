import { ISystemAccess, SystemAccessModel } from "../schemas/system-access.schema";
import Db from "./db";
export class SystemAccess {
    // // static userCollection = userModel.collection;
    db: ISystemAccess = new SystemAccessModel();
    // constructor(db: IUser) {
    //     this.db = db;
    // }
    async findSystemAccess(data: string) {
        const system = data.split(',').map(a=> a.trim());
        const collection = await Db.getCollection('system-access');
        const result = collection.find({"system" : {$in: system}}).toArray();
        return result;
    }
}