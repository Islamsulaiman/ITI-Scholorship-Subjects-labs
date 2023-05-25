/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const router = require('express').Router();
const { notiController } = require('../controllers');

const subscribers = {};
router.post('/', async (req, res) => {
    let notification = {};
    // console.log(req);
    const { body } = req;
    try {
        notification = await notiController.addNoti(body);
        console.log(notification);
        console.log(subscribers);
        Object.keys(subscribers).forEach((ID) => {
            console.log('eeeee');
            subscribers[ID].json(notification);
            console.log(ID);
            delete subscribers[ID];
        });
        // res.json(notification);
    } catch (error) {
        res.json({ message: 'error', error: error.message });
        return;
    }
    res.sendStatus(204);
});
router.get('/', async (req, res) => {
    const ID = Math.ceil(Math.random() * 1000000);
    subscribers[ID] = res;
    console.log('ddddd');
    // console.log(subscribers.length);
    req.socket.on('close', () => {
        console.log(`Connection closed for ID ${ID}`);
        delete subscribers[ID];
    });
});

module.exports = router;
