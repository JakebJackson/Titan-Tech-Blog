//External Resources
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({
  // Need this for dynamically generating posts.
  allowProtoMethodsByDefault: true
});



//internal Resources
const sequelize = require('./config/connection');
const routes = require('./controllers');

//intances and Port Config
const app = express();
const PORT =  process.env.PORT || 3001;

// Session storage
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Middle wear
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './weights')));
app.use(express.static(path.join(__dirname, './images')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on: http://localhost:' + PORT));
  });
