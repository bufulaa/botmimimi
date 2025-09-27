module.exports = {
    name: "reboot",
    run: async (client, message, args) => {
        message.channel.send({ content: "Okay! I'm rebooting my PM2 \\😃" })
        eval("pm2 restart " + process.env.PM2_NAME);
    }
}