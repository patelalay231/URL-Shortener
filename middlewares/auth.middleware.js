const { getUser } = require('../service/auth.service');

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = req.cookies.uid;
    if(!userUid) return res.redirect("/login");
    const user = await getUser(userUid);
    if(!user) return res.redirect("/login");
    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;
  
    const user = getUser(userUid);
  
    req.user = user;
    next();
  }

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth
}