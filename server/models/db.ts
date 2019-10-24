import config from "../config";
import mongoose from 'mongoose';
import { User } from "./user";
import { userModel } from "server/schemas/user.model";
const dbName = "systemaccess";

export default class Db {
  static User: User = new User();
  static async init() {
    const url = config.serviceMongoDB;
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true
      });
      console.log(">>> Database connected");
    } catch(e) {
      console.log(e);
    }
  }
//   Db.User = new User();
}
