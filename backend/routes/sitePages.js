const express = require('express'); 
const router = express.Router(); 

const siteCtrl = require('../controllers/siteActions');

// GET Requests //

router.get('/about', siteCtrl.about);

router.get('/signUp',siteCtrl.signUp);

router.get('/logOut', siteCtrl.logOut);

module.exports = router;