const { exec } = require("child_process")
const CommandBuilder = require("../../classes/CommandBuilder")

module.exports = new CommandBuilder({
    name: "systemctl",
    cmdargs: [
        {
            label: "action",
            options: ["stop", "restart", "reboot"]
        }
    ],
    reqargs: 1,
    run: async ({ message, args }) => {

        if (!process.env.SYSTEMCTL_SERVICE_NAME) return message.channel.send({ content: "You dont have PM2_ID set up in dotenv." })

        args[0] = args[0].toLowerCase()

        try {
            if (args[0] == "restart" || args[0] == "reboot") {
                message.channel.send({ content: "I'm rebooting..."})
                exec(`sudo systemctl restart ${process.env.SYSTEMCTL_SERVICE_NAME}`)
                return
            }

            if (args[0] == "stop") {
                message.channel.send({ content: "Stopping process..."})
                exec(`sudo systemctl stop ${process.env.SYSTEMCTL_SERVICE_NAME}`)
            }
        } catch  {
            message.channel.send({ content: "An error occured." })
        }

    }
})