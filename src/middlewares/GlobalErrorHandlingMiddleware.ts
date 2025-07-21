import { Response, NextFunction, Request } from "express";
import ELCIELTSInternalError from "../exception/SportsDayAppInternalError";

export const SimpleErrorHandler = (error: ELCIELTSInternalError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.getStatus()).send({
    status: error.getStatus(),
    message: error.message,
  });
};
