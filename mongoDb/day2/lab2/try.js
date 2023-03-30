db.islam.updateMany({
    name: { $eq: 'Nicholas Runolfsdottir V'
}
  }, {
    $set: {
      isThere: true
    }
  })

db.islam.find({
    name:{
        $eq: 'Nicholas Runolfsdottir V'
    }
})

db.islam.updateMany({
    name: { $eq: 'Nicholas Runolfsdottir V'
}
  }, {
    $unset: {
      isThere: ''
    }
  })

  db.islam.updateMany({
    tags: { $exists: true, $type: 4 }
  }, {
    $pop: {
      tags: 1
    }
  })

  db.islam.find({
    tags: {$exists:true}
  })


  db.islam.updateMany({
    tags: { $exists: true, $type: 4 }
  }, {
    $push: {
      tags: 'added'
    }
  })

  db.users.updateMany({
    tags: { $exists: true, $type: 4 }
  }, {
    $pull: {
        tags: {
            $in: [ 'added']
      }
    }
  })



  db.islam.find({
    code: {
      $eq: 'ijk'
    }
  })

db.islam.updateOne({
  code: {$eq: 'ijk'}
},{
  $push: {
    tags:{$each: ['tag1', 'tag2']}
  }
})


















  db.islam.update(
    {
        name: 'Clementina DuBuque'
    },
    {
        "$set":{
            "username":'not Clementina DuBuque'
        }
    },
    {
        "upsert":true
    });



db.lab.find({
  $and:[{
    meta:{$eq: 9.5}
  }]
})

db.lab.find({
  $or:[
    {genre: 'drama'},
    {genre: 'action'}
  ]
})

db.lab.find({
  $where: function() { return this.visitors > this.expectedVisitors } }
)

db.lab.find({
  $where:{"this.genre.length == 2"}
})

db.lab.name({
  $where: "this.meta.aired == 2018"
})

db.lab.find({
  $and:[
    {"meta.rating" : {$gt : 8} },
    {"meta.rating" : {$lt : 10} }
  ]
})

db.players.insertMany([{"title":  "barca",reqTeams: "yes"}, {"title":  "liver",reqTeams: "yes"}, {"title":  "madrid",reqTeams: "no"}])


db.players.updateMany({reqTeams: {$eq: "yes"}} ,{$set: {"minAmount": 10}})

db.players.updateMany({reqTeams: {$eq: "yes"}} ,{$inc: {"minAmount": 10}})


db.islam.updateMany({code:{$eq:"xyz"}} , 
  {$set: {"tags.$[]": "many books"}
})


db.islam.updateMany({code:{$eq:"xyz"}} , 
  {$set: {"tags.$[element]": "many many books"}},
  {arrayFilters: [{"element":{$eq: "many books"}}]}
)

db.islam.deleteOne({
  code:{$eq:"xyz"}
})

db.lab.deleteMany({$where: "this.meta.rating > 8.6"})

db.islam.aggregate({$match: {phone: {$exists:true} }},{$sort: {"name":1} })


sudo mongoimport --db lab3 --collection person --jsonArray --file persons.json

db.person.find({age:{$gt: 60}})

db.person.find({
$and:[
  {"dob.age":{$gt: 60}},
  {gender : "male"}
]
}).explain("executionStats")




db.info.insertMany([
  {
    name: "islam",
    email: "islam.com"
  },
  {
    name: "salah",
    email: "salah.com"
  },
  {
    name: "mostafa",
    email: "mostafa.com"
  }
])

db.info.createIndex({email:1}, { unique: true })

db.person.createIndex({gender: "text"})

db.person.aggregate([
  {
    $group:{y: '$email'}
  }
])

db.person.aggregate([
  {
    $group: {
      //_id wich hols the data
      _id:'$email',
      counter: {$sum : 10}
    }
  }
])

db.person.aggregate([
  {
    $group: {
      _id: "$dob.date",
      NumberOfPersons: {$sum :1}
    }
  }
])

db.person.aggregate([{
  $group:{
    _id: "$email",

  }
}])


db.person.aggregate([
  {
    $group:{_id:{$dateToString:{format : "%Y", date : "$date"}},
            count:{$sum: 1}
  }},
  {
    $project:{
      Year: "$date",
      NumberOfPersons: "$count"
    }
  }
])

[{
  name: 'islam',
  email: 'islam1.com'
},
{
  name: 'islam',
  email: 'islam2.com'
},
{
  name: 'islam',
  email: 'islam3.com'
}]

db.info.aggregate([
  {
    $group: {

    }
  }
])


db.person.aggregate([
  {$addFields: {'location.type':"Points"}}
  ,
  {
    $project: {
      gender:1,
      location:{
        type:1,
        Coordinates:[{
            $convert:
            {
              input: '$location.coordinates.latitude',
              to: 'double',
              onError: '0x',
              onNull: '0x'
            }
          },{
              $convert:
              {
                input: '$location.coordinates.longitude',
                to: 'double',
                onError: '0x',
                onNull: '0x'
              }
          }
        ]
      }
      ,
      email:1,
      BirthDay:{$toDate: '$dob.date'},
      fullName:{
        $concat:[
          {$toUpper: {$substrCP: ['$name.first', 0, 1]}},
          {$substrCP: ['$name.first', 1, { "$subtract": [ { $strLenCP: '$name.first' }, 1 ]}]},
          " ",
          {$toUpper:{ $substrCP: ['$name.last', 0, 1]}},
          {$substrCP: ['$name.last', 1, { "$subtract": [ { $strLenCP: '$name.last' }, 1 ]}]}
        ]
      }
      ,
      age:{
        $toInt:{
          $dateDiff:{
            startDate: {$toDate: '$dob.date'},
            endDate: '$$NOW',
            unit: "year"} 
        }
      }
    }
  }
])


