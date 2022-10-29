const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        "slackUsername": "Numero Uno",
        "backend": true,
        "age": 20,
        "bio": "My name is Agu Obumneme Wisdom, a backend developer, curently part of the Hng9 internship program."
    })
})

app.listen(3000, ()=> console.log("Server listening on port 3000..."))