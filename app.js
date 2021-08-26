const express = require('express');
const app = express();
var JsBarcode = require('jsbarcode');
const { createCanvas} = require("canvas");
const port = 3000;
const fs = require("fs");
const path = require('path');



app.get("/getbarcode/:id", (req, res) => {

    var canvas = createCanvas();
    JsBarcode(canvas, req.params.id);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./image.png", buffer);
    res.sendFile(path.resolve('./image.png'));
});


app.listen(port, (error) => {
    console.log(` api/WAMAS app listening at http://localhost:${port}`);

    if (error) {
        console.log(error);
    }
});
