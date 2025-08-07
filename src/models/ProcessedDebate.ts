import { Debate } from "./Debate";
import type { position } from "./positionType";
import { ArgumentAnalysis } from "./ArgumentAnalysis";

class ProcessedDebate extends Debate {
  constructor(
    debate: Debate,
    winner: position,
    proAnalysis: ArgumentAnalysis,
    conAnalysis: ArgumentAnalysis
  ) {
    super(debate.thesis, debate.proArguments, debate.contraArguments);
    this.winner = winner;
    this.proAnalysis = proAnalysis;
    this.conAnalysis = conAnalysis;
  }

  public readonly winner: position;
  public readonly proAnalysis: ArgumentAnalysis;
  public readonly conAnalysis: ArgumentAnalysis;
}

export { ProcessedDebate };
