import { Response, NextFunction, Request } from "express";
import ELCIELTSInternalError from "../exception/SportsDayAppInternalError";
import LoggerConfig from "../config/LoggerConfig";

export const SimpleErrorHandler = (error: ELCIELTSInternalError, req: Request, res: Response, next: NextFunction) => {
  LoggerConfig.getLogger().error(`Error occured`, error);
  res.status(error.getStatus()).send({
    status: error.getStatus(),
    message: error.message,
  });
};
