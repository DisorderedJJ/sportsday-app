import express from "express";
import LeaderBoardController from "../controllers/LeaderBoardController";

// routes begining /sportsapp/loaderboard
const leaderboardRoute = express.Router({ mergeParams: true });
const leaderboardController: LeaderBoardController = new LeaderBoardController();

leaderboardRoute.get("/", leaderboardController.getLeaderboard.bind(leaderboardController));

export default leaderboardRoute;
