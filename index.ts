import express from "express";
import { displayHomePage } from "./controllers/home.ts";
import { displayStepPage } from "./controllers/steps.ts";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`./public`));

app.get("/", displayHomePage);
app.post("/steps/:step", displayStepPage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
