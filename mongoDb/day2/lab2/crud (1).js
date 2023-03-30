db.users.insertOne({
  "1name.name": 'adfas'
})

db.users.insertMany([{}, {}], { ordered: false })

// Find
// SELECT (fields/columns) from table where condition

// Iterator (cursor)
const c = db.people.find({ first_name: 'Christopher' })

// const arr = [1, 2, 3];

// const cursor = {
//   lastElementChecked: -1,
//   hasNext: () => lastElementChecked < arr.length,
//   next: () => {
//     // Search documents in disk.
//     this.lastElementChecked++;
//     return arr[this.lastElementChecked]
//   }
// };

// cursor.next();
db.people.find({ /* filter object */ }, { /* projection */}, { /* options */});

db.people.find({ first_name: 'Christopher', last_name: { $ne: '' } }).count();

// $
$gt
$gte
$lt
$lte

{
  fieldName: {
    $operator: value
  }
}

db.people.find({
  first_name: {
    $eq: 'Christopher'
  },
  last_name: {
    $ne: 'Christopher',
  }
}).count();

db.people.find({
  $or: [
    { first_name: { $eq: 'Christopher' }},
    { first_name: { $eq: 'Thomas' }}
  ]
}).count()

db.people.find({
  first_name: {
    $nin: ['Christopher', 'Thomas']
  }
}).count()

db.people.find({ interests: { $exists: false } })
db.people.find({ address:  {$type: 2}}, { first_name: 1, last_name: 0 })
db.people.find({ 'address.city': 'Nicholsbury' });

[11, 12]
db.people.find({ interests: { $gt: 3, $lt: 10 } }) // interests === 3 or interests.includes(3);
db.people.find({ interests: { $elemMatch: { $gt: 3, $lt: 10 }} });

db.test.insertMany([{
  addresses: [
    { city: 'cairo', country: 'usa' }, 
  { city: 'cairo', country: 'egypt' }, 
  { city: 'alex', country: 'egypt'}]
},
{
  addresses: [
  { city: 'cairo', country: 'usa' }, 
  { city: 'alex', country: 'egypt'}]
}])

db.test.find({ 'addresses.city': 'cairo', 'addresses.country': 'egypt' })
db.test.find({ addresses: { 
  $elemMatch: {
    city: 'cairo',
    country: 'egypt'
  }
}});

// Cursor
db.people.find().skip(10).limit(100).sort({ first_name: 1 });
db.people.find().forEach(doc => {
  print(doc.first_name);
});

// Update
db.people.updateMany({ /* filter object */ }, { /* update */ }, { /* options */ });

db.people.updateMany({
  first_name: { $eq: 'Christopher' }
}, {
  // Add a new field or update an existent field
  $set: {
    isChristopher: true
  }
})

db.people.updateMany({
  first_name: { $eq: 'Christopher' }
}, {
  $set: {
    num: 15
  }
})

db.people.updateMany({
  first_name: { $eq: 'Christopher' }
}, {
  $unset: {
    isChristopher: ''
  }
})

db.people.updateMany({
  first_name: { $eq: 'Christopher' }
}, {
  $inc: {
    num: -2
  }
})

db.people.updateMany({
  first_name: { $ne: 'Christopher' }
}, {
  $unset: {
    interests: ''
  }
})

// Array
db.people.updateMany({
  interests: { $exists: true, $type: 4 }
}, {
  $push: {
    interests: 5
  }
})

db.people.updateMany({
  interests: { $exists: true, $type: 4 }
}, {
  $pop: {
    interests: 1
  }
})

db.people.updateMany({
  interests: { $exists: true, $type: 4 }
}, {
  $pop: {
    interests: -1
  }
})

db.people.updateMany({
  interests: { $exists: true, $type: 4 }
}, {
  $pull: {
    interests: {
      $gte: 16
    }
  }
})

db.people.updateMany({
  'address.country': { $exists: false },
}, {
  $set: {
    'address.country': 'USA'
  }
})

db.people.updateMany({
  continent: { $exists: true }
}, {
  $set: {
    continent: 'North America'
  }
}, {
  // If none matched, then insert a new document with the fields in $set and in filter object.
  upsert: true
})

db.people.updateMany({
  first_name: 'ahmed',
  last_name: 'ali',
  dateOfBirth: new Date(),
  address: { city: 'cairo', country: 'Egypt' }
}, {
  $set: {
    continent: 'Africa'
  }
}, {
  upsert: true
})

db.settings.updateOne({ 
  type: 'general'
}, { 
  $set: {
    limit: 500,
    baseUrl: ''
  }
}, {
  upsert: true
})

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 690,
//   modifiedCount: 690,
//   upsertedCount: 0
// }

// {
//   $updateOperator: {
//     fieldName: value
//   }
// }