import { mapRequestToDebate } from "../helper/mapRequestToDebate.ts";
import { processDebate } from "../helper/processDebate.ts";

function displayResultPage(req, res) {
  const debate = mapRequestToDebate(req);

  const processedDebate = processDebate(debate);

  // No frontend for now
  res.append("Content-Type", "application/json");
  res.send(JSON.stringify(processedDebate));
}

export { displayResultPage };
