import { Request, Response, Router } from 'express';
import {exec, ExecException} from "child_process";
import lampRouter from "./lamp"
// Init router and path
const BaseRouter = Router();

BaseRouter.use("/lamp", lampRouter)


// Export the base-router
export default BaseRouter;
