import { DebateDatabase } from "../models/DebateDatabase.ts";

function checkExpiration(savedDebate): boolean {
  const expiryDate = new Date(savedDebate.expiry);
  const now = new Date();

  if (now < expiryDate) {
    return false;
  }
  deleteDebate(savedDebate.uuid);
  return true;
}

async function deleteDebate(uuid) {
  DebateDatabase.destroy({ where: { uuid } });
}

export { checkExpiration };
