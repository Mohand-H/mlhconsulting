const express = require('express');
const router = express.Router();

router.get('/contact', (req, res)=>{
    res.send('nous contacterrrrrrrrr')
})


module.exports = router; 