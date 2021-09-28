const express = require('express');
const { 
    getSubscriptions,
    postSubscriptions, 
    deleteSubscriptions 
} = require('../controllers/subscriptions');

const router = express.Router();

router.route('/')
.get(getSubscriptions);


router.route('/:id')
    .post(postSubscriptions)
    .delete(deleteSubscriptions)

module.exports = router;