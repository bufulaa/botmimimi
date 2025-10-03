module.exports = (filePath, data) => {
    try {
        require('fs').writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
        console.error('Error writing data:', err);
    }
}