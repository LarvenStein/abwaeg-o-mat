const DebateDatabase = require("../models/DebateDatabase");
const expirationHelper = require("../helper/expirationHelper");

async function doCleanup() {
	const entireDatabase = await DebateDatabase.DebateDatabase.findAll();

	let deletedEntries = 0;

	Array.from(entireDatabase).forEach(savedDebate => {
		if (expirationHelper.checkExpiration(savedDebate)) {
			deletedEntries++;
		}
	});

	console.log(`\n\nCleaned up database and deleted ${deletedEntries} entries!`)
	console.table({
		'Total Entries (before cleanup)': entireDatabase.length,
		'Deleted Entires': deletedEntries
	})
}

doCleanup()