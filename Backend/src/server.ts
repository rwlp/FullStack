import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import router from "./router.ts";
import { middlewareErrors } from "./common/middlewares/middlewareErrors.ts";
import { middlewareCheckRequestBody } from "./common/middlewares/middlewareCheckRequest.ts";

const PORT = 3000; // Needed to put in env var.
const app = express();

// This code turns off cors policy, don't used in Productcion Enviroment!
const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
};

app.use(corsMiddleware);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("", middlewareCheckRequestBody);
app.use(router);

app.use(middlewareErrors);

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});
