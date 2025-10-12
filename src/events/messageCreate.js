const client = require('../../index')
const wrongMessage = require('../utils/wrongMessage')

client.on('messageCreate', async (message) => {

    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(process.env.PREFIX)
    ) return

    const [cmd, ...args] = message.content
        .slice(process.env.PREFIX.length)
        .trim()
        .split(/ +/g)

    const command = client.commands.get(cmd.toLowerCase())
    || client.commands.find(c => c.alias?.includes(cmd.toLowerCase()))

    if (!command) return

    module.exports = { client, message, command }

    if (
        command.directory == 'owner' &&
        !process.env.OWNER_ID.split(',').includes(message.author.id)
    ) return

    /*
    cmdargs: [
        {label: 'action', options: ['restart', 'stop']},
        {label: 'action', options: ['restart', 'stop']}
    ],
    */

    let hasInvalidOption = false

    /*
    problems

    1. does not tell you which options you typed is incorrect
    2. if an options is not set to anything, lets say 'command' dont exactly tell you the commands list
    3. doesn't tell you what the available options are (or tell the user to run $help <command> to see the options)
    4. 
    */

    // if it has command arguments
    if (command?.cmdargs) {
        args.forEach((_, index) => {
            // if it has determined options
            if (command.cmdargs?.[index]?.options) {
                if (!command.cmdargs[index].options.includes(args[index]))
                    hasInvalidOption = true
            }
        })
    }

    if (command.reqargs && args.length < command.reqargs)
        return wrongMessage('Please complete the missing arguments!')

    if (hasInvalidOption) return wrongMessage('You have an invalid option')

    await command.run({ client, message, args })

})

