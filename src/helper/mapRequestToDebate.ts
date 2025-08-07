import { Debate } from "../models/Debate";
import { Argument } from "../models/Argument";

function mapRequestToDebate(req): Debate {
  function wrapToArray(val) {
    return val === undefined ? [] : Array.isArray(val) ? val : [val];
  }

  function mapArguments(texts, weights) {
    const arrTexts = wrapToArray(texts);
    const arrWeights = wrapToArray(weights);
    return arrTexts
      .map((arg, i) => ({ text: arg, weight: arrWeights[i] }))
      .filter(({ text }) => typeof text === "string" && text.trim() !== "")
      .map(({ text, weight }) => new Argument(text, weight));
  }

  const proArguments = mapArguments(req.body.pro, req.body["pro-w"]);
  const conArguments = mapArguments(req.body.con, req.body["con-w"]);

  return new Debate(req.body.thesis, proArguments, conArguments);
}

export { mapRequestToDebate };
