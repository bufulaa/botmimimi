module.exports = (text) => {
    const { client, message, command } = require("../events/message_create")
    message.channel.send({ content: (text || "Incorrect argument. Please use the command as follows:")  + `\n\`${process.env.PREFIX}${command.name}\` ${require("./argsToText")(command.arguments)}` })
}