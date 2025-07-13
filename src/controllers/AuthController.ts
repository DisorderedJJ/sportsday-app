import ISigninService from "../services/auth/signin/ISigninService";
import { Response, Request, NextFunction } from "express";
import {
  UserData,
  UserSigninPayload,
} from "../utils/types/common/types";
import AsyncControllerHandle from "../utils/decorators/AsyncControllerErrorDecorator";
import SigninService from "../services/auth/signin/SigninService";

class AuthController {
  private signInService: ISigninService;

  constructor() {
    this.signInService = SigninService.GetInstance();
  }

  @AsyncControllerHandle
  async signInUser(req: Request, res: Response, next: NextFunction) {
    const payLoad: UserSigninPayload = req.body;
    const result: Array<UserData> = await this.signInService.userSignIn(payLoad)
    res.status(200).json(result);
  }


}

export default AuthController;
