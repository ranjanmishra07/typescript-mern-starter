import express, { Request, Response } from 'express';
export function getHomeRouter() {
    return express
      .Router({ mergeParams: true })
      .get('/',getHomePage)
  }

function getHomePage(_req: Request, res: Response){
    res.json({message: 'home page'});
}

export function test() {
    console.log('testing ');
}