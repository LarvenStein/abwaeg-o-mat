import { Argument } from "../models/Argument.ts";
import { Debate } from "../models/debate.ts";

function displayStepPage(req, res) {
  const debate: Debate = mapRequestToDebate(req);
  const step: number = req.params.step;

  const pageTitle: string =
    step == 1
      ? "Pro und Contra Argumente eintragen"
      : "Gewichtung für die Argumente Vergeben";

  // Calculating next step
  let nextStep: string = "/steps/2";
  if (step == 2) {
    nextStep = "/result";
  }

  // Just in case
  if (step > 2) {
    res.redirect("/");
  }

  res.render("../views/argumentsForm.pug", {
    currentStep: step,
    debate: debate,
    title: pageTitle,
    nextStep: nextStep,
  });
}

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

export { displayStepPage };
