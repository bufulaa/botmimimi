module.exports = (obj, key) => {
    let i = -1
     for (let x in obj) {
        i++
        if (obj[x] == key) return Object.keys(obj)[i]
     }
     return null
} 