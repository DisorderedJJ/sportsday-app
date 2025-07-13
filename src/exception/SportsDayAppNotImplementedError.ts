import SportsDayAppInternalError from "./SportsDayAppInternalError";

class SportsDayAppNotImplementedError extends SportsDayAppInternalError {
  constructor(message: string) {
    super(message, 501);
  }
}

export default SportsDayAppNotImplementedError;
