import { decrypt } from "../helper/encryptionHelper.ts";
import { mapRequestToDebate } from "../helper/mapRequestToDebate.ts";
import { mapSavedDebateToDebate } from "../helper/mapSavedDebateToDebate.ts";
import { processDebate } from "../helper/processDebate.ts";
import { DebateDatabase } from "../models/DebateDatabase.ts";

async function displayResultPage(req, res) {
  const debate = mapRequestToDebate(req);

  const processedDebate = processDebate(debate);

  res.render("../views/resultPage.pug", {
    pDebate: processedDebate,
    saved: false,
  });
}

async function displayResultPageFromStorage(req, res) {
  if (req.params.uuid === undefined) {
    res.redirect("/");
    return;
  }
  const savedDebate = await DebateDatabase.findByPk(req.params.uuid);

  let data = savedDebate!.data;

  if (savedDebate!.encrypted) {
    if (req.body === undefined) {
      res.render("../views/passwordPrompt.pug", {
        uuid: req.params.uuid,
      });
      return;
    }
    try {
      data = decrypt(data, req.body.password);
    } catch {
      res.render("../views/passwordPrompt.pug", {
        uuid: req.params.uuid,
      });
      return;
    }
  }

  const debate = mapSavedDebateToDebate(data);

  const processedDebate = processDebate(debate);

  res.render("../views/resultPage.pug", {
    pDebate: processedDebate,
    saved: true,
  });
}

export { displayResultPage, displayResultPageFromStorage };
