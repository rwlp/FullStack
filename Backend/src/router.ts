import { Router } from "express";
import usersRouter from "./modules/users/routes";
import catalogRouter from "./modules/catalog/routes";
import authUserRouter from "./modules/authUser/routes";
import middlewareCheckAuthentication from "./common/middlewares/middlewareCheckAuthentication";

const router = Router();

// No protect routers 
router.use("/api/users", usersRouter);
router.use("/api/auth/users", middlewareCheckAuthentication, authUserRouter);
router.use("/api/catalog", catalogRouter);

export default router;
