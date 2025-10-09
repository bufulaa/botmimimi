const CommandBuilder = require('../../classes/CommandBuilder')
const filter = require('../../utils/codeBlockfilter')

module.exports = new CommandBuilder({
    name: 'eval',
    alias: ['ev', 'evaluate'],
    cmdargs: [
        {
            label: 'code'
        }
    ],
    reqargs: 1,
    run: async ({ client, message, args }) => {

        try {

            const code = args.join(' ')
            if (!code) return message.reply({ content: 'You haven\'t specified the code you want to run.' })

            let evaluated = eval(code)

            if (typeof evaluated !== 'string') evaluated = require('util').inspect(evaluated)

            message.channel.send({ content: `\`\`\`js\n${filter(evaluated)}\`\`\`` })

        } catch (err) {

            message.channel.send({ content: `\`\`\`js\n${filter(err)}\`\`\`` })

        }

    }
})