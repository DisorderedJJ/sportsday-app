import { House, SportType } from "./common";


export interface LederBoardData {
  lastUpdated: Date;
  marksListBySport: Array<SportMarks>
}

export interface SportMarks {
  sportName: SportType
  houseMarks: Array<SportMarksByHouse>
}

export interface SportMarksByHouse {
  houseName: House
  marksList: Array<MarksForHouseByDate>
}

export interface MarksForHouseByDate {
  commencedDate: Date
  marks: number
}

export interface FinalMarks {
  house: string,
  marks: number
}

export interface UserData {
  userName: string,
  house: string
}

export interface UserSigninPayload {
  userName: string
}