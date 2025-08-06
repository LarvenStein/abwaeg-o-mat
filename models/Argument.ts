class Argument {
  constructor(argument: string, weight?: number) {
    this.weight = weight ?? 1;
    this.argument = argument;
  }

  public readonly weight: number;
  public readonly argument: string;
}

export { Argument };
