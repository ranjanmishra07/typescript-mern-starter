import express, { Request, Response } from 'express';
import Db from '../models/db';
export function getHomeRouter() {
    return express
      .Router({ mergeParams: true })
      .get('/',getHomePage)
      .use(express.urlencoded({ extended: true }))
      .post('/user', createUser)
  }

function getHomePage(_req: Request, res: Response){
    res.json({message: 'home page'});
}

function createUser(req: Request, res: Response) {
    console.log(req.body);
    const {user} = req.body;
    const result =  Db.User.createUser(user);
    res.send(result);
}

export function test() {
    console.log('testing ');
}