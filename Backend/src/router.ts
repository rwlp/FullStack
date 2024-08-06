import { Router } from "express";
import usersRouter from "./modules/users/routes";
import catalogRouter from "./modules/catalog/routes";

const router = Router();

router.use("/api/users", usersRouter);
router.use("/api/catalog", catalogRouter);

export default router;
