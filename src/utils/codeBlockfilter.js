module.exports = text => {
    if (typeof (text) === 'string') {
        text = text.replace(/`/g, '`' + String.fromCharCode(8203))
        text = require('./stringLimiter')(text, 2000, 1988)
    }
    return text
}