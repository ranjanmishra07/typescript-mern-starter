export interface IUser {
 name: string,
 email: string,
 status: User
} 

export enum User {
    admin = 'admin',
    supervisor = 'supervisor'
}