const User = require('../dbs/models/users.model');
const {setUser} = require('../service/auth.service')

const {v4:uuidv4} = require('uuid');

async function handleUserSignup(req,res){
    const { username, email, password } = req.body;
    const user = await User.findOne({email});
    if(user) res.json({err : "user already exits!!"});
    await User.create({
        username : username,
        email : email,
        password : password,
    })
    return res.redirect("/");
}

async function handleUserSignin(req,res){
    const { email, password } = req.body;
    const user = await User.findOne({email,password});
    if(!user) return res.redirect('/',{
        error : "Invalid Username or Password"
    })
    const sessionid = uuidv4();
    setUser(sessionid,user);
    res.cookie("uid",sessionid);
    return res.redirect("/");
}

module.exports = { handleUserSignup,handleUserSignin };