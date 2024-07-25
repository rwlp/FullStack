import "express-async-errors";
import express from "express";
import router from "./router.ts";
import { middlewareErrors } from "./common/middlewares/middlewareErrors.ts";

const PORT = 3000; // Needed to put in env var.
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(middlewareErrors);

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});
