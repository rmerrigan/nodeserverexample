const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

/*
***NOTE: EJS simply serves html, ejs is not discoverable by user upon view page source
--render: goes to the templating engine specification middleware, 
which then funnels into views specification middleware and uses routing from
there which we specify in the html
--includes: ejs includes reusable code in include keyword, so we can include code
snippets in ejs with dyanmic content from the templating engine. 
--data: sent through render to the appropriate ejs file where we can use
vanilla js and html in tandem to show data.
*/

app.set('view engine', 'ejs'); //tells express to compile dynamic content with specified template engin
app.set('views', 'views'); //tells express where to look for views in mvc

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//express static allows for proper css and html pathing to each other

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
