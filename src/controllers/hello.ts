import { Request, Response } from "express";
import * as P from "bluebird";
import { FesDebug } from "../log";
import { Hello, Greeting } from "api/dist/node-models/hello_world/models";

const debug = new FesDebug("src:controllers:getHelloWorld");

export async function getHelloWorld(req: Request, res: Response): P<any> {
    const name = req.swagger.params.name.value;
    const surname = req.swagger.params.surname.value;
    res.send({ msg: "hello " + name + " " + surname} as Hello);
}

export async function postHelloWorld(req: Request, res: Response): P<any> {
    const greeting: Greeting = req.swagger.params.greeting.value;
    const surname = greeting.surname ? " " + greeting.surname : "";
    res.send({ msg: "hello " + greeting.name + surname} as Hello);
}
