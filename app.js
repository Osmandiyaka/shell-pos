const express = require('express');
const bodyParser = require('body-parser');

const httpRequestAdaptor = require('./infrasture/express-request-adaptor');
const productController = require('./products/product.controller')();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/products",  httpRequestAdaptor(productController.create));
app.get("/products",  httpRequestAdaptor(productController.list));

const port = process.env.Port || 3000;
app.listen(port, () => {
    console.log('Listening on port' + port);
})