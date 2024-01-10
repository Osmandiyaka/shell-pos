const uuid = require('uuid');
const IdGenerator = () => Object.freeze({
    generateId: () => uuid.v4()
});

module.exports = IdGenerator;