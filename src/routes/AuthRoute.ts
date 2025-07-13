import express from "express";
import AuthController from "../controllers/AuthController";

const authRoute = express.Router({ mergeParams: true });
const authController: AuthController = new AuthController();

// routes begining /sportsapp/auth
authRoute.post("/signin", authController.signInUser.bind(authController));

export default authRoute;
