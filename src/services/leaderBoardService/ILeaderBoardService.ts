import { GetTranscriptionJobCommandOutput, LanguageCode, MediaFormat, StartTranscriptionJobCommandOutput } from "@aws-sdk/client-transcribe";

interface ILeaderBoardService {
  getLeaderboard(sportsName: string): Promise<any>;
}

export default ILeaderBoardService;
