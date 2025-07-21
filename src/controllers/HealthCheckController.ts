import { Response, Request } from "express";

export const getHealth = (req: Request, res: Response) => {
  console.log(`Application health checking`);
  res.send({ success: true });
};
