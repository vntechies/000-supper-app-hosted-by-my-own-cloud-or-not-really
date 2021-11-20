const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./database', 'utf-8');
    console.log('Count ', count);

    const newCount = parseInt(count) + 1;

    writeFileSync('./database', newCount.toString());

    res.send(`
        <!DOCTYPE html>
        <html>
        <body>
        
        <p>Page views: ${newCount}</p>
        
        </body>
        </html>
    `);
})

app.listen(5000, () => console.log('http://localhost:5000/'));