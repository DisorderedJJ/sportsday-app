import SportsDayAppInternalError from "./SportsDayAppInternalError";

class SportsDayAppNotFoundError extends SportsDayAppInternalError {
  constructor(message: string) {
    super(message, 404);
  }
}

export default SportsDayAppNotFoundError;
