import { Request, Response } from "express";
import * as P from "bluebird";
import { FesDebug } from "../log";
import { Exchange, ModelError  } from "api/dist/node-models/hello_world/models";
import * as rp from "request-promise";
const debug = new FesDebug("fes:src:controllers:getExchange");

export async function getExchange(req: Request, res: Response): P<any> {

    const options = {
        uri: "https://api.exchangeratesapi.io/latest",
        headers: {
            "Content-Type": "application/json"
        },
        json: true // Automatically parses the JSON string in the response
    };

    try {
        const body: Exchange = await rp(options);
        res.json(body);
    } catch (exception) {
        res.json({ message: "Uknown Error"} as ModelError);
    }

    return undefined;
}
