import { Request, Response } from "express";
import * as P from "bluebird";
import { FesDebug } from "../log";
import { Hello, Greeting } from "api/dist/node-models/hello_world/models";

const debug = new FesDebug("fes:src:controllers:getHelloWorld");

export async function getHelloWorld(req: Request, res: Response): P<any> {
    const name =
    req.swagger.params && req.swagger.params.name.value ? req.swagger.params.name.value : "World";
    debug.log("name: ", name);
    const surname =
    req.swagger.params && req.swagger.params.surname.value ? req.swagger.params.surname.value : "World";
    debug.log("surname: ", surname);
    res.send({ msg: "hello " + name + " " + surname} as Hello);
}

export async function getHelloWorldPost(req: Request, res: Response): P<any> {
    const greeting: Greeting =
    req.swagger.params && req.swagger.params.greeting.value ?
    req.swagger.params.greeting.value : { name: "world", surname: "world"} as Greeting;
    debug.log("Greeting: ", greeting);
    res.send({ msg: "hello " + greeting.name + " " + greeting.surname} as Hello);
}
