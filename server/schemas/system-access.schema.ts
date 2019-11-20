import { Schema, model, Model, Document } from 'mongoose';

export interface ISystemAccess extends Document {
    device: string | String,
    approverEmail1: string,
    escalationApprover1: string,
    escalationApprover2: string
} 
const SystemAccessSchema: Schema = new Schema<Document>({
    system: {
        type: String,
        required: true,
    },
    approverEmail : {
        type: String,
        lowercase: true
    },
    escalationApprover1 : {
        type: String,
        lowercase: true
    },
    escalationApprover2: {
        type: String,
        lowercase:true
    }
});

export const SystemAccessModel: Model<ISystemAccess> =  model<ISystemAccess>('system-access', SystemAccessSchema);