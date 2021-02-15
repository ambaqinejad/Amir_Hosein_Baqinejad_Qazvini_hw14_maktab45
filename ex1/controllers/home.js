const path = require('path');

module.exports = (req, res, next) => {
    res.render(path.join('pages', 'home.ejs'), {
        active: 'home',
        title: 'Home'
    })
}