import { Response, NextFunction, Request } from "express";
import LoggerConfig from "../config/LoggerConfig";
import { randomUUID } from "crypto";
import { LoggerTypes } from "../utils/types/common/common";

export const ListeningChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.LISTENING, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const WritingChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.WRITING, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const SpeakingChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.SPEAKING, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const ReadingChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.READING, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const AuthChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.AUTH, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const FAQChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.FAQ, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const HealthCheckChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.HEALTH_CHECK, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const PaymentChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.PAYMENT, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};

export const ResourcesChildLogger = (req: Request, res: Response, next: NextFunction) => {
  const uuid = randomUUID();
  LoggerConfig.newRouteLogger(uuid, LoggerTypes.RESOURCES, req.userData ? req.userData.userId : "");
  req.requestId = uuid;
  next();
};
