import config from "../config";
import { MongoClient } from "mongodb";
const dbName = 'systemaccess';

export default class Db {
//   static Review: Review;
    static async init() {
       const url = config.serviceMongoDB;
       return await MongoClient.connect(url,
           { useNewUrlParser: true, useUnifiedTopology: true });
    }
    static async getCollection (colName: string) {
        const client = await Db.init();
        return client.db(dbName).collection(colName);
    }
}