const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})