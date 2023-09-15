const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (request, response) => {
    fs.readFile('./templates/index.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Error');
        }

        response.send(html);
    })
});

app.listen(process.env.Port || 3000)