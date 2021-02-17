const path = require('path');

const getLoginPage = (req, res) => {
    res.render(path.join('pages', 'login.ejs'), {
        title: 'Login'
    })
}

module.exports = {
    getLoginPage
}