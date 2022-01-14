import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../service/user.service";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
    try {
        // @ts-ignore
        const user = await createUser(req.body);
        // @ts-ignore
        return res.send(omit(user.toJSON(), "password"));
    } catch (e) {
        // @ts-ignore
        log.error(e);
        // @ts-ignore
        return res.status(409).send(e.message);
    }
}
