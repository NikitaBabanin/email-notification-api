const keys = require('../keys')

module.exports = function(email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'A gift is sent to you',
        html: `
      <img src="https://static.turbosquid.com/Preview/001199/694/GI/3D-gift-box-red_DHQ.jpg" alt="" height="288" width="388"/>
      <h1>A gift was sent to you from the "Shopify" store</h1>
      <p>The gift will be delivered within two days</p>
      <hr />
      <a href="${keys.BASE_URL}">Shopify</a>
    `
    }
}
