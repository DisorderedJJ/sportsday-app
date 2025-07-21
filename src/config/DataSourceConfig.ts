import axios, { AxiosError, AxiosResponse } from "axios";
import { LederBoardData, UserData } from "../utils/types/common/types";
import SportsDayAppInternalError from "../exception/SportsDayAppInternalError";
import configs from "./configs";
import CommonValidator from "../utils/validators/CommonValidator";

const getLeaderboardData = (dataURL: string | undefined): Promise<LederBoardData> => {
  CommonValidator.validateNotEmptyOrBlankStringWithError(dataURL, true, new SportsDayAppInternalError("Application error - undefined dataURL"));
  return axios
    .get(dataURL!)
    .then((response: AxiosResponse<LederBoardData>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new SportsDayAppInternalError(error.message);
    });
};

const getUserData = (userDataURL: string | undefined): Promise<Array<UserData>> => {
  CommonValidator.validateNotEmptyOrBlankStringWithError(userDataURL, true, new SportsDayAppInternalError("Application error - undefined userDataURL"));
  return axios
    .get(userDataURL!)
    .then((response: AxiosResponse<Array<UserData>>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
      throw new SportsDayAppInternalError(error.message);
    });
};

export default {
  getLeaderboardData,
  getUserData,
};
