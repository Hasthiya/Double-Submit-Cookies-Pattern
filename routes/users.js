const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1');
const bodyParser = require('body-parser');
var token;
var sessionId;

//User Auth
router.post('/authenticate', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    if(username == "Amarabandu" && password == "Rupasinghe"){
        res.json({
            success: true,
            msg: "username/password correct",
        })
    } else {
        res.json({
            success: false,
            msg: "username/password incorrect"
        })
    };
});

//Compare Tokens
router.post('/postToken', (req, res, next) => {
    
    var resHiddenToken = req.body.hiddenToken;
    var resCookieToken = req.body.CookieToken;

    console.log(resHiddenToken + "  " + resCookieToken);

    if(resHiddenToken == resCookieToken){
        
        res.json({
            success: true,
            msg: "token varified",
        })

    }
});


module.exports = router;