const path = require('path');
const shoesData = require(path.join(path.dirname(__dirname), 'models', 'shoes.json'));

module.exports = (req, res, next) => {
    res.render(path.join('pages', 'home.ejs'), {
        active: 'home',
        title: 'Home',
        shoes: shoesData
    })
}