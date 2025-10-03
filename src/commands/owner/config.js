const CommandBuilder = require('../../classes/CommandBuilder')
const read = require('../../utils/read')
const write = require('../../utils/write')
const wrongMessage = require('../../utils/wrongMessage')

module.exports = new CommandBuilder({
    name: 'config',
    cmdargs: [
        {label: 'action', options: ['set', 'get']},
        {label: 'value'},
        {label: 'set as? (for \'set\')'}
    ],
    run: async ({ message, args }) => {
        
        const config = 'src/json/bot_config.json'
        const rcfg = read(config)

        if (!args[0]) return message.channel.send({ content: `\`\`\`json\n${JSON.stringify(rcfg)}\`\`\``})

        args[0] = args[0].toLowerCase()

        if (args[1] && !rcfg[args[1].toLowerCase()]) return message.channel.send({ content: `There is no value such as \`${args[1]}\`!` })

        if (args[0] == 'get') {
            if (!args[1]) return wrongMessage()
            return message.channel.send({ content: `Current value for ${args[1].toLowerCase()} is \`${rcfg[args[1]]}\`` })
        }
        
        if (args[0] == 'set') {
            if (!args[1]) return wrongMessage()
            rcfg[args[1].toLowerCase()] = args[2]
            write(config, rcfg)
            message.channel.send({ content: `The value of ${args[1].toLowerCase()} has been changed to \`${args[2]}\`. I must be rebooted for the changes to apply.`})
        }
        else return wrongMessage()

    }
})