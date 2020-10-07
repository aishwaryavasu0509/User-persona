const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('acess denied')

    try{
        const verified=jwt.verify(token);
        req.user = verified;
    }catch(err){
        res.status(400).send('invalid token');
    }
}