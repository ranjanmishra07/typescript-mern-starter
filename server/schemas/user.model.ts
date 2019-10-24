import { Schema, model, Model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string,
    email: string,
} 

const UserSchema: Schema = new Schema<Document>({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    }
});

export const userModel: Model<IUser> =  model<IUser>('user', UserSchema);