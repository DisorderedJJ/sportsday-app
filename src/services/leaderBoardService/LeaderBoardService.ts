import configs from "../../config/configs";
import DataSourceConfig from "../../config/DataSourceConfig";
import { House, SportType } from "../../utils/types/common/common";
import { FinalMarks, LederBoardData, SportMarks, SportMarksByHouse } from "../../utils/types/common/types";
import CommonValidator from "../../utils/validators/CommonValidator";
import ILeaderBoardService from "./ILeaderBoardService";


class LeaderBoardService implements ILeaderBoardService {
  private static instance: ILeaderBoardService = new LeaderBoardService();

  constructor() {}

  static GetInstance(): ILeaderBoardService {
    return this.instance;
  }

  public getLeaderboard(sportsName: string): Promise<Array<FinalMarks>> {
    const leaderBoardData: Promise<LederBoardData> = DataSourceConfig.getLeaderboardData(configs.dataURL)
    leaderBoardData.then(data => {
      if (sportsName === null || sportsName === undefined || sportsName === "undefined") {
        const initialFinalMarks: Array<FinalMarks> = [
          {
            house: House.EARTH_KINGDOM,
            marks: 0.0
          },
          {
            house: House.AIR_NOMANDS,
            marks: 0.0
          },
          {
            house: House.FIRE_NATION,
            marks: 0.0
          },
          {
            house: House.WATER_TRIBE,
            marks: 0.0
          }
        ]
        return data.marksListBySport.reduce((finalMarks, marksBySport) => {
          const marksForSport = this.getMarksBySport(marksBySport)
          return finalMarks.map(marks => {
            const newMarks = marks.marks + (marksForSport.find(value => value.house === marks.house)?.marks || 0)
            return {...marks, marks: newMarks}
          })
        }, initialFinalMarks)
        
      } else {
        CommonValidator.validateParamInADefinedValues(sportsName, Object.values(SportType), "Sport Name")
        const marksListBySport: SportMarks | undefined = data.marksListBySport.find(sportMarks => sportMarks.sportName === sportsName);
        return this.getMarksBySport(marksListBySport)
      }
    })
   
    throw new Error("Method not implemented.");
  }

  private getMarksBySport(marksListBySport: SportMarks | undefined): Array<FinalMarks> {
    const marksForEarthKindom: Array<SportMarksByHouse> = marksListBySport?.houseMarks.filter(houseMarks => houseMarks.houseName === House.EARTH_KINGDOM) || []
    const marksForAirNomands: Array<SportMarksByHouse> = marksListBySport?.houseMarks.filter(houseMarks => houseMarks.houseName === House.AIR_NOMANDS) || []
    const marksForFireNation: Array<SportMarksByHouse> = marksListBySport?.houseMarks.filter(houseMarks => houseMarks.houseName === House.FIRE_NATION) || []
    const marksForWaterTribe: Array<SportMarksByHouse> = marksListBySport?.houseMarks.filter(houseMarks => houseMarks.houseName === House.WATER_TRIBE) || []
    const finalMarks = [
      {
        house: House.EARTH_KINGDOM,
        marks: this.calcualteMarksForAHouse(marksForEarthKindom)
      },
      {
        house: House.AIR_NOMANDS,
        marks: this.calcualteMarksForAHouse(marksForAirNomands)
      },
      {
        house: House.FIRE_NATION,
        marks: this.calcualteMarksForAHouse(marksForFireNation)
      },
      {
        house: House.WATER_TRIBE,
        marks: this.calcualteMarksForAHouse(marksForWaterTribe)
      }
    ]
    return finalMarks
  }

  private calcualteMarksForAHouse(houseMarks: Array<SportMarksByHouse>) {
    return houseMarks.reduce((houseMarksSum, houseMarks) => {
      const totalMarks = houseMarks.marksList.reduce((sum, marks) => sum+ marks.marks, 0)
      return houseMarksSum + totalMarks
    }, 0)
  }
  
}

export default LeaderBoardService
