import chaiHttp = require("chai-http");
import { initSwaggerMiddlware } from "../../src/middlewares/swagger";
import app from "../../src/application";
// import { Exchange  } from "api/dist/node-models/hello_world/models";
import * as chai from "chai";
// import * as nock from "nock";
const expect = chai.expect;
chai.use(chaiHttp);

describe("Hello World - TEST GET ", function () {
    // TODO: Add tests
});

describe("Hello World - Test POST", function () {
    // TODO: Add tests
});
