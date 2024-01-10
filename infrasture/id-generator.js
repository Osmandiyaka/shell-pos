const uuid = require('uuid');
const IdGenerator = Object.freeze({
    generateId: () => uuid.v5()
});

module.exports = IdGenerator;