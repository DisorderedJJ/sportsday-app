import { Response, Request, NextFunction } from "express";
import { FinalMarks, LederBoardData } from "../utils/types/common/types";
import AsyncControllerHandle from "../utils/decorators/AsyncControllerErrorDecorator";
import LeaderBoardService from "../services/leaderBoardService/LeaderBoardService";
import ILeaderBoardService from "../services/leaderBoardService/ILeaderBoardService";

class LeaderBoardController {
  private leaderBoardService: ILeaderBoardService;

  constructor() {
    this.leaderBoardService = new LeaderBoardService();
  }

  @AsyncControllerHandle
  async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    const sportName: string = req.query.sportName ? req.query.sportName.toString() : "";
    const result: LederBoardData | Array<FinalMarks> = await this.leaderBoardService.getLeaderboard(sportName);
    res.status(200).send(result);
  }

}

export default LeaderBoardController;
