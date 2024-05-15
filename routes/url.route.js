const express = require('express');
const { handleGenerateNewShortURL , handleRedirectUrl, handleAnalyticsOfUrl } = require("../controllers/url.controller")
const router = express();


router.post('/',handleGenerateNewShortURL);


module.exports = router;