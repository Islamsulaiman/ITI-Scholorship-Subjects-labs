/* eslint-disable no-shadow */
/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */
const Noti = require('../models/notification');
// let lastId = null;
const addNoti = (data) => Noti.create(data);
// const getNoti = () => Noti.find();

// const getNoti = async () => {
//     if (lastId === null) {
//       // First time fetch, return all documents sorted by creation time in descending order
//       const notifications = await Noti.find().sort({ createdAt: -1 });
//       if (notifications.length > 0) {
//         lastId = notifications[0]._id;
//       }
//       return notifications;
//     } else {
//       // Subsequent fetches, return documents created after lastId
//       const notifications = await Noti.find({ _id: { $gt: lastId } }).sort({ createdAt: -1 });
//       if (notifications.length > 0) {
//         lastId = notifications[0]._id;
//       }
//       return notifications;
//     }
//   };

// const lastFetchTime = null;
const getNoti = async (lastFetchTime) => {
    let notifications = await Noti.find();
    if (lastFetchTime) {
        // filter notifications based on lastFetchTime
        notifications = notifications.filter((noti) => noti.createdAt > lastFetchTime);
    }
    return notifications;
};

module.exports = {
    addNoti,
    getNoti,
};
