/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const router = require('express').Router();

router.use('/notification', require('./Notification'));
router.use('/long/notification', require('./longNotification'));

module.exports = router;
