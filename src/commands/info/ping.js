const CommandBuilder = require("../../classes/CommandBuilder")

module.exports = new CommandBuilder({
    name: "ping",
    run: async ({ client, message }) => {
        message.channel.send( {content: `I have approximately \`${client.ws.ping}\` braincells.` })
    }
})