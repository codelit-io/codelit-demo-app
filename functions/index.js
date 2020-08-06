const express = require("express")
const fs = require("fs")
const functions = require('firebase-functions');
const preRender = express()

preRender.use(
    require("prerender-node").set("prerenderToken", "ZZoeqpRymv6jDJEmxTdH")
)

preRender.get("*", (req, res) => {
    res.status(200).send(fs.readFileSync("./web/index.html").toString())
})

exports.preRender = functions.https.onRequest(preRender)