import {Request, Response, Router} from "express";
import {exec} from "child_process";
import StatusCodes from 'http-status-codes';
const { INTERNAL_SERVER_ERROR, OK} = StatusCodes;


const router = Router();

/******************************************************************************
 *                      POST toggles the lamp
 ******************************************************************************/

router.post('/on',  (req: Request, res: Response) => {
    console.log("[LAMP] POST /lamp")
    return exec("sudo ./uhubctl -a on -p 1 -l 2", (err) => {
        if (err){
            console.error(err);
            return res.status(INTERNAL_SERVER_ERROR);
        }else{
            return res.status(OK)
        }
    })
});


router.post('/off',  (req: Request, res: Response) => {
    console.log("[LAMP] POST /lamp")
    return exec("sudo ./uhubctl -a off -p 1 -l 2", (err) => {
        if (err){
            console.error(err);
            return res.status(INTERNAL_SERVER_ERROR);
        }else{
            return res.status(OK)
        }
    })
});


export default router;

