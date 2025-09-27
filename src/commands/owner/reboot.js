module.exports = {
    name: "reboot",
    run: async (client, message, args) => {
        try {
            message.channel.send({ content: "Okay! I'm rebooting my PM2 \\😃" })
            eval("pm2 restart " + process.env.PM2_NAME);
        } catch {
            message.channel.send({ content: "It seems that you haven't added a PM2_NAME in .env or you're not running on PM2"})
        }
    }
}