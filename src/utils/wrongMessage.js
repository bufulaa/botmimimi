module.exports = (text) => {
    const { client, message, command } = require("../events/messageCreate")
    message.channel.send({ content: (text || "Incorrect argument. Please use the command as follows:")  + `\n\`${process.env.PREFIX}${command.name}\` ${require("./argsToText")(command.cmdargs)}` })
}