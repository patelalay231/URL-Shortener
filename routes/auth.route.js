const express = require('express');
const { handleUserSignup, handleUserSignin } = require('../controllers/users.controller');

const auth = express();

auth.post('/signup',handleUserSignup);

auth.post('/login',handleUserSignin);

module.exports = auth;