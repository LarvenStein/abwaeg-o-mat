import express from "express";
import { displayHomePage } from "./controllers/home";
import { displayStepPage } from "./controllers/steps";
import {
  displayResultPage,
  displayResultPageFromStorage,
} from "./controllers/result";
import { performDebateSave } from "./controllers/save";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public/`));

app.get("/", displayHomePage);

app.post("/steps/:step", displayStepPage);

app.post("/result", displayResultPage);
app.get("/result/:uuid", displayResultPageFromStorage);
app.post("/result/:uuid", displayResultPageFromStorage);

app.post("/save", performDebateSave);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
