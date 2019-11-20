import { deviceModel } from "../schemas/device.schema";
import Db from "./db";
import {ObjectID} from "mongodb"

export class Device {
    // // static userCollection = userModel.collection;
    // db: IDevice = new deviceModel();
    // constructor(db: IUser) {
    //     this.db = db;
    // }
    async getDevices() {
         const devices = await deviceModel.find()
         return devices;
    }
    async createDevice(device: any) {
        console.log('device incoming', device);
        const col = await Db.getCollection('device');
        const res = col.insertMany(device); 
        return res;
    }

    async updateDeviceRequest(_id: string, status: string) {
        console.log('update device', status);
        const col = await Db.getCollection('device');
        const res = await col.updateOne({"_id": new ObjectID(_id)}, {$set: {"status": status}});
        return res;
    }

    async getDeviceById(id: string) {
        const col = await Db.getCollection('device');
        const res = await col.findOne({"_id": new ObjectID(id)});
        return res;
    }
}