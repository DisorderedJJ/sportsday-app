import SportsDayAppInternalError from "./SportsDayAppInternalError";

class SportsDayAppUnauthorizedError extends SportsDayAppInternalError {
  constructor(message: string) {
    super(message, 401);
  }
}

export default SportsDayAppUnauthorizedError;
