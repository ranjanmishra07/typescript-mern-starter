import config from "../config";
import { MongoClient } from "mongodb";
const dbName = 'systemaccess';

export async function initMongo(url: string, dbName: string, colName: string) {
    const client = await MongoClient.connect(url,
       { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db(dbName).collection(colName);
}

export async function getCollection(colName: string) {
    const url = config.serviceMongoDB;
    return initMongo(url, dbName, colName);
  }