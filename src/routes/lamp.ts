import {Request, Response, Router} from "express";
import {exec} from "child_process";
import StatusCodes from 'http-status-codes';
const { INTERNAL_SERVER_ERROR, OK} = StatusCodes;
import * as util from "util";
import logger from "@shared/Logger";
const AsyncExec = util.promisify(exec);

const router = Router();

/******************************************************************************
 *                      POST toggles the lamp
 ******************************************************************************/

router.post('/on',  async(req: Request, res: Response) => {
    await AsyncExec("sudo ./uhubctl -a on -p 1 -l 2")
    return res.sendStatus(200)

});


router.post('/off',  async(req: Request, res: Response) => {
    await AsyncExec("sudo ./uhubctl -a off -p 1 -l 2")
    return res.sendStatus(200)
});

// toggle route
let isLightOn = false;
exec("sudo ./uhubctl -a off -p 1 -l 2", ()=> {logger.info("light turned off")})
router.post('/toggle',  async(req: Request, res: Response) => {
    isLightOn = !isLightOn;
    if(isLightOn){
        await AsyncExec("sudo ./uhubctl -a off -p 1 -l 2")
        return res.sendStatus(200)
    } else {
        await AsyncExec("sudo ./uhubctl -a on -p 1 -l 2")
        return res.sendStatus(200)
    }
});


export default router;

