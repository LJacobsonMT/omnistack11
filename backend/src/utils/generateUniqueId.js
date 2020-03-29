const crypto = require('crypto')

//Não vai chamar nenhum side-effect

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}