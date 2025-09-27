const client = require("../../index")
const wrongmessage = require("../utils/wrongMessage")

client.on("messageCreate", async (message) => {

    if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(process.env.PREFIX)) return

    const [cmd, ...args] = message.content
        .slice(process.env.PREFIX.length)
        .trim()
        .split(/ +/g)

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()))

    if (!command) return

    module.exports = { client, message, command }

    if (command.directory == "owner" && !process.env.OWNER_ID.split(",").includes(message.author.id)) return
    if (command.reqargs)
        if (args.length < command.reqargs)
            return wrongmessage("Please complete the missing arguments!")

    await command.run({ client, message, args})

})

