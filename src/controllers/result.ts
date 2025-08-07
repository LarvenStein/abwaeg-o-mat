import { decrypt } from "../helper/encryptionHelper";
import { mapRequestToDebate } from "../helper/mapRequestToDebate";
import { mapSavedDebateToDebate } from "../helper/mapSavedDebateToDebate";
import { processDebate } from "../helper/processDebate";
import { DebateDatabase } from "../models/DebateDatabase";
import { checkExpiration } from "../helper/expirationHelper";

async function displayResultPage(req, res) {
  const debate = mapRequestToDebate(req);

  const processedDebate = processDebate(debate);

  res.render(`${__dirname}/../views/resultPage.pug`, {
    pDebate: processedDebate,
    saved: false,
  });
}

async function displayResultPageFromStorage(req, res) {
  const { uuid } = req.params;

  // UUID must be provided
  if (!uuid) return res.redirect("/");

  // Fetch debate from DB
  const savedDebate = await DebateDatabase.findByPk(uuid);

  // Debate must exist and not be expired
  if (!savedDebate || checkExpiration(savedDebate)) return res.redirect("/");

  let { data, encrypted } = savedDebate.get();

  // If encrypted, show password prompt or try to decrypt
  if (encrypted) {
    if (!req.body) {
      return res.render("../views/passwordPrompt.pug", { uuid });
    }
    try {
      data = decrypt(data, req.body.password);
    } catch {
      return res.render("../views/passwordPrompt.pug", { uuid });
    }
  }

  // Normal processing
  const debate = mapSavedDebateToDebate(data);
  const processedDebate = processDebate(debate);

  res.render(`${__dirname}/../views/resultPage.pug`, {
    pDebate: processedDebate,
    saved: true,
  });
}

export { displayResultPage, displayResultPageFromStorage };
