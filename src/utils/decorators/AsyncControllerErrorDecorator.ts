import { NextFunction, Request, Response } from "express";
import ELCIELTSInternalError from "../../exception/SportsDayAppInternalError";
import LoggerConfig from "../../config/LoggerConfig";

function AsyncControllerHandle(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
    try {
      return await originalMethod.call(this, req, res, next);
    } catch (err) {
      LoggerConfig.getLogger(req.requestId).error(`Error occured in method name: ${methodName}`, err);
      if (err instanceof ELCIELTSInternalError) {
        next(err);
      } else {
        next(new ELCIELTSInternalError("Internal Error"));
      }
    }
  };
}

export default AsyncControllerHandle;
