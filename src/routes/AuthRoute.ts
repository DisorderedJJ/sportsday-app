import express from "express";
import AuthController from "../controllers/AuthController";
import { AuthChildLogger } from "../middlewares/LoggerCreateMiddlewares";

const authRoute = express.Router({ mergeParams: true });
const authController: AuthController = new AuthController();

// routes begining /ielts/auth
authRoute.post("/signup", AuthChildLogger, authController.signUpUser.bind(authController));
authRoute.post("/signup/verify", AuthChildLogger, authController.verifyUser.bind(authController));
authRoute.post("/users", AuthChildLogger, authController.signInUser.bind(authController));
authRoute.post("/users/cognitoChallange", AuthChildLogger, authController.completeCognitoChallange.bind(authController));
authRoute.post("/users/password-reset", AuthChildLogger, authController.sendPasswordResetCode.bind(authController));
authRoute.post("/users/reset-password", AuthChildLogger, authController.resetForgotPassword.bind(authController));
authRoute.delete("/users", AuthChildLogger, authController.userSignout.bind(authController));

// google oauth 2.0 signin
authRoute.get("/google/callback", AuthChildLogger, authController.signInGoogle.bind(authController));

export default authRoute;
