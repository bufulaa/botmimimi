const { Collection, Client } = require("discord.js")
const client = new Client({ intents: 32767 })

client.commands = new Collection()
client.config = require("./src/json/bot_config.json")

module.exports = client

require("dotenv").config()
require("./src/handler")(client)

client.login(process.env.TOKEN)             