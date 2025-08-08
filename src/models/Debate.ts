import { Argument } from "./Argument";

class Debate {
  constructor(
    thesis: string,
    proArguments?: Array<Argument>,
    contraArguments?: Array<Argument>
  ) {
    this.thesis = thesis;
    this.proArguments = proArguments;
    this.contraArguments = contraArguments;
  }

  public readonly thesis: string;
  public readonly proArguments?: Array<Argument>;
  public readonly contraArguments?: Array<Argument>;
}

export { Debate };
