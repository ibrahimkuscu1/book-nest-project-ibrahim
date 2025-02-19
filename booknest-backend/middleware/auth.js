const jwt=require("jsonwebtoken");

const config= process.env;

const verifyToken =(req,res,next)=>{
    console.log(req.headers.authorization);
    const token=req.body.token || req.query.token || req.headers.authorization
    if(!token){
        return res.status(403).send("a token is required for authentication")
    }
    try{
        const decoded=jwt.verify(token, config.Private_Key);
        req.user=decoded;
    } catch(err){
        return res.status(401).send(" invalid Token");
    }
    return next()
}

module.exports = verifyToken