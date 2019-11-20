import config from "../config";
import mongoose, { Mongoose } from 'mongoose';
import { User } from "./user";
import {Device} from './device.model';
import { SystemAccess } from "./system-access.model";
import { MongoClient } from "mongodb";

export default class Db {
  static User: User = new User();
  static Device: Device = new Device();
  static SystemAccess: SystemAccess = new SystemAccess(); 
  static async getCollection(collectionName: string) {
     const client =  await MongoClient.connect(config.serviceMongoDB);
     const db = client.db();
     const collection = db.collection(collectionName);
     return collection;
  }
  static async init() {
    const url = config.serviceMongoDB;
    try {
      // await mongoose.connect(url, {
      //   useNewUrlParser: true
      // });
      await MongoClient.connect(url);
      console.log(">>> Database connected to ", url);
    } catch(e) {
      console.log(e);
    }
  }
}
