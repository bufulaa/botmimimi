const CommandBuilder = require('../../classes/CommandBuilder')

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

        const clean = text => {

            if (typeof (text) === 'string') text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
            text = require('../../utils/stringLimiter')(text, 2025, 1988)
            return text
            
        }

        try {

            const code = args.join(' ')
            let evaluated = eval(code)

            if (typeof evaluated !== 'string') evaluated = require('util').inspect(evaluated)
            if (!code) message.reply({ content: 'You haven\'t specified the code you want to run.' })

            message.channel.send({ content: `\`\`\`js\n${clean(evaluated)}\`\`\`` })

        } catch (err) {

            message.channel.send({ content: `\`\`\`js\n${clean(err)}\`\`\`` })

        }

    }
})