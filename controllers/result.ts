import { mapRequestToDebate } from "../helper/mapRequestToDebate.ts";
import { processDebate } from "../helper/processDebate.ts";

function displayResultPage(req, res) {
  const debate = mapRequestToDebate(req);

  const processedDebate = processDebate(debate);

  res.render("../views/resultPage.pug", {
    pDebate: processedDebate,
  });
}

export { displayResultPage };

// Notiz: https://www.reddit.com/r/node/comments/108yrgr/encrypt_and_decrypt_a_string_with_a_passphrase/
