var path = require('path')
const express = require('express')
const axios = require('axios')

const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.send('Ja!')
})

app.post('/analyze', function (req, res) {
    axios({
        method: 'post',
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        data: {
            key: process.env.API_KEY,
            lang: 'en',
            txt: req.body.text
        }
    }).then((result, error) => {
        res.send(result.data)
        return;
    })
    .catch((err) => {
        console.log('Backend error');
        res.status(500).send(err);
        return;
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example  app listening on port 8081!')
})
