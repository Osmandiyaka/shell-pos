const IdGenerator = require('../infrasture/id-generator')();
const ProductFactory = require('./product')({ idGenerator: IdGenerator });

const ProductController = () => {
    return Object.freeze({
        create: (httpRequest) => {
            httpRequest=httpRequest;
            const { body } = httpRequest;
            const product = ProductFactory(body);
            const productJson = product.toJson();
            console.log(productJson);
            return new Promise((resolve, reject) => {
                resolve(productJson);
            })
        }
    });
}

module.exports = ProductController;