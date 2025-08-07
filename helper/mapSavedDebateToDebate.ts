import { Debate } from "../models/Debate.ts";

function mapSavedDebateToDebate(data: string): Debate {
  const rawDebate = JSON.parse(data);
  return new Debate(
    rawDebate.thesis,
    rawDebate.proArguments,
    rawDebate.contraArguments
  );
}

export { mapSavedDebateToDebate };
