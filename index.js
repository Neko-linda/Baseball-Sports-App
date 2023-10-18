const express = require('express');
const app = express();
const fs = require('fs');
const {} = require('./baseball')

fs.readFile('description.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('----- error ----', error);
    } else {
        console.log(data);
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT)
})