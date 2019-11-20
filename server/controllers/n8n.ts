import express, { Request, Response } from "express";
import Db from "../models/db";
import { IDevice } from "../schemas/device.schema";
export function getN8nRouter() {
  return express
    .Router({ mergeParams: true })
    .get("/device/get", getDeviceRequest)
    .use(express.urlencoded({ extended: true }))
    .post("/lookupService", lookupService)
    .post("/updateAccess", updateDeviceRequest)
    .post("/sendEmail", sendEmail)
    .post("/device/insert", insertDeviceRequest)
    .post("/device/update", updateDeviceRequest);
}

async function insertDeviceRequest(req: Request, res: Response) {
  const deviceDetail = req.body;
  // const result = await Db.Device.createDevice(device);
  // result.status ? res.json({success : true}) : res.json({success: false})
  console.log('device', deviceDetail);
  res.json(deviceDetail);
}

async function getDeviceRequest(_req: Request, res: Response) {
  const result = await Db.Device.getDevices();
  res.json(result);
}

function sendEmail(_req: Request, res: Response) {
  res.json({ message: "home page" });
}


async function lookupService (req: Request, res:Response) {
  const item = req.body;
  const values: {device : string, email: string, length: Number} = item;
  const systemRes = await Db.SystemAccess.findSystemAccess(values.device);
  const deviceInsertItem = systemRes.map(a =>  {
    return {
      'requesterEmail': values.email,
      'approverEmail': a.approverEmail,
      'device': a.system,
      'status': 'pending',
      'managerEmail': 'testM'
    }
  });
  const saveDataToDevices = await Db.Device.createDevice(deviceInsertItem);
  if(saveDataToDevices.result.ok) {
    const dataToSend = saveDataToDevices.ops;
    console.log('dataToSend', dataToSend);
    res.send(dataToSend);
  } else {
    res.json({error: true, message: "error in saving to database"})
  }
}

async function updateDeviceRequest (req: Request, res: Response) {
  console.log('body', req.body);
  const {_id, status} = req.body;
  const deviceStatus: IDevice = await Db.Device.getDeviceById(_id);
  console.log('deviceStatus',deviceStatus);
  if(deviceStatus.status === 'approved' || deviceStatus.status === 'rejected') {
    res.json({success: "false", message: `The System ${deviceStatus.device} for requester ${deviceStatus.requesterEmail} Has been Already ${deviceStatus.status}`, data: deviceStatus})
  } else {
    try{
      const data = await Db.Device.updateDeviceRequest(_id, status);
      if(data.modifiedCount) {
        deviceStatus.status = status;
        res.json({success: "true",message : `The System ${deviceStatus.device} for requester ${deviceStatus.requesterEmail} Has been ${deviceStatus.status} by ${deviceStatus.approverEmail}`, data: deviceStatus});
       } else {
         res.json({success: "false", message: "no matching rows"})
       }
    }catch(e) {
      res.json({success: false, error: e})
    }
  }
}