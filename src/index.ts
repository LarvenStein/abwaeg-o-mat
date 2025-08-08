import express from "express";
import i18n from "i18n";
import cookieParser from "cookie-parser";
import { displayHomePage } from "./controllers/home";
import { displayStepPage } from "./controllers/steps";
import {
  displayResultPage,
  displayResultPageFromStorage,
} from "./controllers/result";
import { performDebateSave } from "./controllers/save";

const app = express();
const port = 3000;

i18n.configure({
  locales: ["de", "en", "nl"],
  directory: `${__dirname}/locales`,
  defaultLocale: "en",
  cookie: "lang",
});

app.use(cookieParser());

app.use(i18n.init);

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
