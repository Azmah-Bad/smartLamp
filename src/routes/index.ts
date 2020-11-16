import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import {exec, ExecException} from "child_process";
// Init router and path
const router = Router();
const { INTERNAL_SERVER_ERROR, OK} = StatusCodes;


/******************************************************************************
 *                      POST toggles the lamp
 ******************************************************************************/

router.post('/lamp',  (req: Request, res: Response) => {
    console.log("[LAMP] POST /lamp")
    exec("sudo ./uhubctl -a on -p 1 -l 2", (err) => {
        if (err){
            console.error(err);
            res.status(INTERNAL_SERVER_ERROR);
        }
        res.status(OK)
    })
    return res.status(OK).json({});
});





// Export the base-router
export default router;
