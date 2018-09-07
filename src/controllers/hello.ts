import { Request, Response } from "express";
import * as P from "bluebird";
import { FesDebug } from "../log";
import { Hello } from "api/dist/node-models/hello_world/hello";

const debug = new FesDebug("fes:src:controllers:getHelloWorld");

export async function getHelloWorld(req: Request, res: Response): P<any> {
    const greeting =
    req.swagger.params && req.swagger.params.greeting.value ? req.swagger.params.greeting.value : "World";
    debug.log("Greeting: ", greeting);
    res.send({ msg: "hello " + greeting} as Hello);
}
