const Client = require("./CustomClient")
const { Message } = require("discord.js")

/**
 * @callback RunFunction
 * @param {{client?: Client, message?: Message, args?: string[]}} RunDetails
 */

/**
 * @typedef {Object} CmdArgsDetails
 * @property {string} label
 * @property {string[]} options
 */

/**
 * @typedef {Object} CommandDetails
 * @property {string} name
 * @property {string[]} alias
 * @property {CmdArgsDetails[]} cmdargs // MIGHT USE []
 * @property {number} reqargs,
 * @property {RunFunction} run
 */

module.exports = class CommandBuilder {
    /**
     * @param {CommandDetails} details
     */
    constructor ({ name, alias, cmdargs, reqargs, run}) {
        this.name = name;
        this.alias = alias ?? null;
        this.cmdargs = cmdargs ?? null;
        this.reqargs = reqargs ?? null;
        this.run = run;
    }
}