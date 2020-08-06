"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const fs = require("fs");
const express_1 = require("express");
const preRender = express_1.default();
preRender.use(require("prerender-node").set("prerenderToken", "PRERENDER_TOKEN"));
preRender.get("*", (req, res) => {
    res.status(200).send(fs.readFileSync("./web/index.html").toString());
});
exports.preRender = functions.https.onRequest(preRender) `;
//# sourceMappingURL=index.js.map