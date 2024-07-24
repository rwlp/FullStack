import "express-async-errors";
import express from "express";
import router from "./router.ts";

const PORT = 3000; // Needed to put in env var.
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});
