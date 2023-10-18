const express = require('express');
const app = express();
const fs = require('fs');
const { } = require('./baseball');

app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to my Baseball App!' })
});

app.get('/favplayer', (req, res) => {
    return res.json({ answer: answer });
});

app.get('/metsroster', (req, res) => {
    return res.json({ Roster: 'Pitchers || Jeff Brigham, José Butto, Carlos Carrasco, Sam Coonrod, Reed Garrett, Trevor Gott,Grant Hartwig,Anthony Kay, Joey Lucchesi, Tylor Megill, Vinny Nittoli, Adam Ottavino, David Peterson, José Quintana, Brooks Raley, Sean Reid-Foley,Denyi Reyes, Kodai Senga, Drew Smith' })
});

fs.readFile('about.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('----- error ----', error);
    } else {
        console.log(data);
    }
});

app.get('/read', (req, res) => {
    let element = req.query.something; // story
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an issue, try again later...' });
        } else {
            console.log(data)
            return res.json({ message: data });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT)
});