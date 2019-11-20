import { Schema, model, Model, Document } from 'mongoose';

export interface IDevice {
    device: string | string[],
    requesterEmail: string,
    status: string,
    managerEmail: string,
    approverEmail: string
} 

export const DeviceStatus = ["pending","approved","rejected"]
const DeviceSchema: Schema = new Schema<Document>({
    device: {
        type: String,
        required: true,
        lowercase: true
    },
    requesterEmail: {
        type: String,
        required: true,
        lowercase: true
    },
    managerEmail: {
        type: String,
        lowercase: true
    },
    status : {
        type: String,
        enum : DeviceStatus,
        default: 'pending'
    },
    approverEmail : {
        type: String,
        required: true,
        lowercase: true
    }
});

export const deviceModel =  model('device', DeviceSchema);