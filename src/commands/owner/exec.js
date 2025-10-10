const CommandBuilder = require('../../classes/CommandBuilder')
const filter = require('../../utils/codeBlockfilter')
const execPromise = require('util').promisify(require('child_process').exec)

module.exports = new CommandBuilder({
    name: 'exec',
    alias: ['ex', 'execute'],
    cmdargs: [
        {
            label: 'code'
        }
    ],
    reqargs: 1,
    run: async ({ message, args }) => {

        try {

            const command = args.join(' ')
            if (!command) return message.reply({ content: 'You haven\'t specified the code you want to run.' })

            const { stdout, stderr } = await execPromise(command)
            let retVal = stderr || stdout

            message.channel.send({ content: `\`\`\`\n${filter(retVal)}\`\`\`` })

        } catch (err) {

            message.channel.send({ content: `\`\`\`\n${filter(err)}\`\`\`` })

        }

    }
})