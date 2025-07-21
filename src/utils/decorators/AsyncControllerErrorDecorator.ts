import { NextFunction, Request, Response } from "express";
import SportsDayAppInternalError from "../../exception/SportsDayAppInternalError";

function AsyncControllerHandle(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
    try {
      return await originalMethod.call(this, req, res, next);
    } catch (err) {
      console.log(err);
      if (err instanceof SportsDayAppInternalError) {
        next(err);
      } else {
        next(new SportsDayAppInternalError("Internal Error"));
      }
    }
  };
}

export default AsyncControllerHandle;
