const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8000;
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use(cookieParser());

app.use(expressLayouts);
// extract style and scripts from sub page into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
  session({
    name: 'solutionWeb',
    // todo
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 100 * 60 * 100,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: 'disable',
      },
      function (err) {
        console.log('connect- mongodb setup ok');
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));

app.listen(PORT, console.log(`Server started On port ${PORT}`));
