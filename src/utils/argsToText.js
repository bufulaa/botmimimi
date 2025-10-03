module.exports = (cmdArguments) => {
    let returnValue = new Array()
    cmdArguments.forEach((args) => returnValue.push(`\`<${args.label}>\``))
    return returnValue.join(' ')
}