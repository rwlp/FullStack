import { Router } from "express";
import usersRouter from "./modules/users/routes";
import catalogRouter from "./modules/catalog/routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/catalog", catalogRouter);

export default router;
