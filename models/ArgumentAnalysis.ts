import type { position } from "./positionType.ts";

class ArgumentAnalysis {
  constructor(position: position, argumentPoints: number, bonusPoints: number) {
    this.position = position;
    this.argumentPoints = argumentPoints;
    this.bonusPoints = bonusPoints;
    this.totalPoints = argumentPoints + bonusPoints;
  }

  public readonly position: position;
  public readonly argumentPoints: number;
  public readonly bonusPoints: number;
  public readonly totalPoints: number;
}

export { ArgumentAnalysis };
