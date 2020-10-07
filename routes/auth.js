const router=require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register',async (req,res) => {
   

    //check if user exists
    const emailexists = await User.findOne({email:req.body.email});
    if(emailexists) return res.status(400).send('email exists');

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword= await bcrypt.hash(req.body.password,salt);

    //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
        type: req.body.type,
        organization: req.body.organization
    });
    try {
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
});

//LOGIN
router.post('/login',async(req,res) => {
    const emailexists = await User.findOne({email:req.body.email});
    if(emailexists) return res.status(400).send('email exists');

    //password correct
    const validpass = await bcrypt.compare(req.body.password,user.password);
    if(!validpass) return res.status(400).send('invalid password');


    //create and assign token
    const token = jwt.sign({_id:user._id});
    res.header('auth-token',token).send(token);

    res.send('LOGGED IN');
});




module.exports=router;

