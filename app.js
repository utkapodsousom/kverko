var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/main',
            Text: 'Главная'
        }, {
            Link: '/cards',
            Text: 'Штамп-визитки'
        }, {
            Link: '/layout',
            Text: 'Индивидуальный макет'
        }, {
            Link: '/gallery',
            Text: 'Галерея'
        }, {
            Link: '/order',
            Text: 'Заказать'
        }, {
            Link: '/about',
            Text: 'О нас'
        }]
    });
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
