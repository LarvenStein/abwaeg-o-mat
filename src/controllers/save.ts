import { mapRequestToDebate } from "../helper/mapRequestToDebate";
import { encrypt } from "../helper/encryptionHelper";
import { v4 as uuidv4 } from "uuid";
import { DebateDatabase } from "../models/DebateDatabase";

async function performDebateSave(req, res) {
  const debate = mapRequestToDebate(req);

  let debateData: string = JSON.stringify(debate);

  let encrypted = false;

  if (req.body.password !== "") {
    console.log("encrypted");
    encrypted = true;
    debateData = encrypt(debateData, req.body.password);
  }

  const savedDebate = DebateDatabase.build({
    uuid: uuidv4(),
    data: debateData,
    expiry: req.body.expiry,
    encrypted: encrypted,
  });

  await savedDebate.save();

  res.redirect(`/result/${savedDebate.get("uuid")}`);
}

export { performDebateSave };
