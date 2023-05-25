/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const router = require('express').Router();
const { notiController } = require('../controllers');

router.post('/', async (req, res) => {
    // console.log(req);
    const title = req.body;
    try {
        const notification = await notiController.addNoti(title);
        res.json(notification);
    } catch (error) {
        res.json({ message: 'error', error: error.message });
    }
});
router.get('/', async (req, res) => {
    const { lastFetchTime } = req.query; // get lastFetchTime from query parameter
    // console.log(lastFetchTime);
    try {
        const notification = await notiController.getNoti(lastFetchTime);
        res.json(notification);
    } catch (error) {
        res.json({ message: 'error', error: error.message });
    }
});

module.exports = router;
