import { Router } from "express";
import {getHelloWorld, /* getHelloWorldPost */} from "../controllers/hello";
import { asyncHandler } from "../lib/asyncHandler";
export const helloWorldGet  = Router().use("/", asyncHandler(getHelloWorld, "helloWorldGet"));
export const helloWorldPost  = Router().use("/", asyncHandler(getHelloWorld, "helloWorldPost"));
// export const helloWorldPost  = Router().use("/", asyncHandler(getHelloWorldPost, "helloWorldPost"));
