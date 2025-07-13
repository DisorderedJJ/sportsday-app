import SportsDayAppInternalError from "./SportsDayAppInternalError";

class SportsDayAppDataInvalidError extends SportsDayAppInternalError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default SportsDayAppDataInvalidError;
