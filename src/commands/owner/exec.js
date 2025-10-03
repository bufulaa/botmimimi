const CommandBuilder = require('../../classes/CommandBuilder')
const { execSync } = require("child_process")

module.exports = new CommandBuilder({
    name: 'exec',
    alias: ['ex', 'execute'],
    cmdargs: [
        {
            label: 'code'
        }
    ],
    reqargs: 1,
    run: async ({ client, message, args }) => {

        const clean = text => {

            if (typeof (text) === 'string') text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
            text = require('../../utils/stringLimiter')(text, 4000, 1988)
            return text
            
        }

        try {

            const command = args.join(' ')
            let executed = execSync(command).toString()

            if (!command) return message.reply({ content: 'You haven\'t specified the code you want to run.' })
                
            message.reply({ content: `\`\`\`js\n${clean(executed)}\`\`\`` })

        } catch (err) {

            message.reply({ content: `\`\`\`js\n${clean(err)}\`\`\`` })

        }

    }
})