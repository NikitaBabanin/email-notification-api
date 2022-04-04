const {Router} = require('express')
const router = Router()
const keys = require('../keys')
const standartNotification = require('../emails/standart-notification')

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.EMAIL_FROM,
        pass: keys.EMAIL_PASS
    }
});

router.post('/resend', async (req, res) => {
    const {email} = req.body

    if (!email) {
        return res.json({value: false, message: 'Error. Email is empty.'})
    }

    try {
        await transporter.sendMail(standartNotification(email))
        res.json({value: true, message: 'Message sent'})
    } catch (error) {
        res.json({value: false, message: error.message})
    }
})
router.post('/send', async (req, res) => {
    const email = '';
    const properties = req.body.line_items[0].properties

    properties.forEach((item) =>{
        if(item.key === 'Email'){
            email: item.value;
        }
    })
    try {
        await transporter.sendMail(standartNotification(email))
        res.json({value: true, message: 'Message sent', body:req.body})
    } catch (error) {
        res.json({value: false, message: error.message,body:req.body})
    }
})

module.exports = router
