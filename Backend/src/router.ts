import { Router } from "express";
import usersRouter from "./modules/users/routes";
import catalogRouter from "./modules/catalog/routes";
import authUserRouter from "./modules/authUser/routes";

const router = Router();

router.use("/api/users", usersRouter);
router.use("/api/catalog", catalogRouter);

router.use("/api/auth/users", authUserRouter);


export default router;
