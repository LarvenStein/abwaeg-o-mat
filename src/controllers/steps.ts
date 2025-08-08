import { Debate } from "../models/Debate";
import { mapRequestToDebate } from "../helper/mapRequestToDebate";

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

  res.render(`${__dirname}/../views/argumentsForm.pug`, {
    currentStep: step,
    debate: debate,
    title: pageTitle,
    nextStep: nextStep,
  });
}

export { displayStepPage };
