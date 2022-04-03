const express = require('express')
const helmet = require('helmet')
const mailer = require('./routes/email-notification')

const PORT = process.env.PORT || 3000
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())

app.use('/notification', mailer)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
