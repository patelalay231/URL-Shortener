const shortid = require("shortid");
const URL = require("../dbs/models/url.model");

function isHttpsUrl(url) {
  return url.startsWith('https://');
}

async function handleGenerateNewShortURL(req,res){
    const shortID = shortid(8);
    const url = req.body.url;
    const allurls = await URL.find({createBy : req.user._id});

    if (!url) return res.render("index", { error: 'Please provide the URL!!' ,urls: allurls});
    if (!isHttpsUrl(url)) return res.render("index", { error: 'URL must start with https://',urls: allurls });

    await URL.create({
        shortId : shortID,
        redirectedUrl : url,
        visitedHistory: [],
        createBy : req.user._id,
    })
    return res.render("index", {
      urls: allurls,
      id : shortID
    });
}

async function handleRedirectUrl(req,res){
  const shortId = req.params.id;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
    visitHistory: { 
          timestamp: Date.now(),
        },
      },
    }
  );
  if(!entry) res.json({err : "shortid doesn't exists"});
  res.redirect(entry.redirectedUrl);
}


module.exports = {
    handleGenerateNewShortURL,
    handleRedirectUrl,
}