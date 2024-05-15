const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { handleRedirectUrl } = require("./controllers/url.controller")

const urlRoute = require("./routes/url.route");
const staticRoute = require("./routes/static.route");
const authRoute = require("./routes/auth.route");
const {restrictToLoggedinUserOnly,checkAuth} = require('./middlewares/auth.middleware');

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

require('./dbs/manage');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.resolve("./assests")));
app.use('/',checkAuth,staticRoute);

app.use('/url',restrictToLoggedinUserOnly,urlRoute);
app.use('/a/:id',handleRedirectUrl)
app.use('/user',authRoute);

app.listen(port);