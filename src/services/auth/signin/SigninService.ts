
import ISigninService from "./ISigninService";
import { UserData, UserSigninPayload } from "../../../utils/types/common/types";
import DataSourceConfig from "../../../config/DataSourceConfig";
import configs from "../../../config/configs";
import Fuse from "fuse.js";
import CommonValidator from "../../../utils/validators/CommonValidator";

class SigninService implements ISigninService {
  private static instance: ISigninService = new SigninService();

  private constructor() {}

  static GetInstance(): ISigninService {
    return this.instance;
  }

  async userSignIn(payLoad: UserSigninPayload): Promise<Array<UserData>> {
    CommonValidator.validateNotEmptyOrBlankString(payLoad.userName, "user name", true)
    const userData: Promise<Array<UserData>> = DataSourceConfig.getUserData(configs.userDataURL)
    return userData.then(userData => this.userSearch(payLoad.userName, userData))
  }

  private userSearch(term: string, userData: Array<UserData>): Array<UserData> {
     const fuse = new Fuse(userData, {
      keys: ["userName"],
      threshold: 0.4,
    });
    const results = fuse.search(term);
    return results.map(result => result.item)
  }

}

export default SigninService;
