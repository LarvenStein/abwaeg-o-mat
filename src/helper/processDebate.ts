import { ArgumentAnalysis } from "../models/ArgumentAnalysis";
import { Debate } from "../models/Debate";
import type { position } from "../models/positionType";
import { ProcessedDebate } from "../models/ProcessedDebate";

function processDebate(debate: Debate): ProcessedDebate {
  const proArgumentCount: number = debate.proArguments!.length;
  const conArgumentCount: number = debate.contraArguments!.length;

  const proArgumentBonusPoints: number = debate.proArguments!.reduce(
    (sum, argument) => sum + (argument.weight - 1),
    0
  );

  const conArgumentBonusPoints: number = debate.contraArguments!.reduce(
    (sum, argument) => sum + (argument.weight - 1),
    0
  );

  // Alles außer if 🥸
  const winner: position =
    proArgumentCount + proArgumentBonusPoints >
    conArgumentCount + conArgumentBonusPoints
      ? "Pro"
      : proArgumentCount + proArgumentBonusPoints ===
        conArgumentCount + conArgumentBonusPoints
      ? "Neutral"
      : "Kontra";

  return new ProcessedDebate(
    debate,
    winner,
    new ArgumentAnalysis("Pro", proArgumentCount, proArgumentBonusPoints),
    new ArgumentAnalysis("Kontra", conArgumentCount, conArgumentBonusPoints)
  );
}

export { processDebate };
