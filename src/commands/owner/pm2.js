module.exports = {
    name: "pm2",
    arguments: [
        {label: "action", options: ["stop", "restart", "reboot"]},
    ],
    reqargs: 1,
    run: async (client, message, args) => {



    //     pm2.connect((err) => {

    //         console.log("Connected to PM2");

    //         if (err) console.log(err)
            
    //         console.log(process.env.PM2_NAME)

    //         if (args[0].toLowerCase() == "restart") {
    //             console.log("TRIGGERED RESTART")

    //             pm2.restart(0, (err) => {
    //                 console.log("WON")
    //                 if (err) {
    //                     message.channel.send("An error has occured, please check logs.")
    //                     console.log(err)
    //                     console.log("TRIGGERED ERR")
    //                 } else {
    //                     message.channel.send("I'm restarting my process in PM2!")
    //                     console.log("Process restarted:", proc)
    //                     console.log("TRIGGERED PROC")
    //                 }
                        
    //             })

    //         }

    //         if (args[0].toLowerCase() == "stop") {
    //             console.log("TRIGGERED STOP")

    //             pm2.stop(0, (err) => {
    //                 console.log("WON")
    //                 if (err) {
    //                     message.channel.send("An error has occured, please check logs.")
    //                     console.log(err)
    //                     console.log("TRIGGERED ERR")
    //                 } else {
    //                     message.channel.send("I'm stopping my process in PM2!")
    //                     console.log("Process stopped:", proc)
    //                     console.log("TRIGGERED PROC")
    //                 }
                        
    //             })

    //         }

    //         pm2.disconnect()
    //     })

    console.log("TRIGGERED")
    }
    
}