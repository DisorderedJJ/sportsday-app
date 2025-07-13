import {
  UserSigninPayload,
  UserData,
} from "../../../utils/types/common/types";

interface ISigninService {
  userSignIn(payLoad: UserSigninPayload): Promise<Array<UserData>>;
  
}

export default ISigninService;
