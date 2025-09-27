const { exec } = require("child_process")

module.exports = {
    name: "pm2",
    arguments: [
        {label: "action", options: ["stop", "restart", "reboot"]},
    ],
    reqargs: 1,
    run: async (client, message, args) => {

        if (!process.env.PM2_ID) return message.channel.send({ content: "You dont have PM2_ID set up in dotenv." })

        args[0] = args[0].toLowerCase()

        try {
            if (args[0] == "restart" || args[0] == "reboot") {
                message.channel.send({ content: "I'm rebooting..."})
                exec(`pm2 restart ${process.env.PM2_ID}`)
            }

            else if (args[0] == "stop") {
                message.channel.send({ content: "Stopping process..."})
                exec(`pm2 stop ${process.env.PM2_ID}`)
            }
        } catch  {
            message.channel.send({ content: "An error occured." })
        }

    }
    
}