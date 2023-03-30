// Index
db.people.createIndex({ first_name: 1 })

db.people.find({ first_name: 'Christopher' }).explain();
const res = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: 'm201.people',
    indexFilterSet: false,
    parsedQuery: { first_name: { '$eq': 'Christopher' } },
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { first_name: 1 },
        indexName: 'first_name_1',
        isMultiKey: false,
        multiKeyPaths: { first_name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { first_name: ['["Christopher", "Christopher"]'] }
      }
    },
    rejectedPlans: []
  },
  serverInfo: {
    host: 'ibrahim',
    port: 27017,
    version: '4.4.15',
    gitVersion: 'bc17cf2c788c5dda2801a090ea79da5ff7d5fac9'
  },
  ok: 1
};

db.people.find({ last_name: 'anything' }).explain();
const res2 = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: 'm201.people',
    indexFilterSet: false,
    parsedQuery: { last_name: { '$eq': 'Christopher' } },
    winningPlan: {
      stage: 'COLLSCAN',
      filter: { last_name: { '$eq': 'Christopher' } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  serverInfo: {
    host: 'ibrahim',
    port: 27017,
    version: '4.4.15',
    gitVersion: 'bc17cf2c788c5dda2801a090ea79da5ff7d5fac9'
  },
  ok: 1
}

db.people.find({ last_name: 'nonexistent', first_name: 'Christopher' }).explain();
const res3 = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: 'm201.people',
    indexFilterSet: false,
    parsedQuery: {
      '$and': [
        { first_name: { '$eq': 'Christopher' } },
        { last_name: { '$eq': 'nonexistent' } }
      ]
    },
    winningPlan: {
      stage: 'FETCH',
      filter: { last_name: { '$eq': 'nonexistent' } },
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { first_name: 1 },
        indexName: 'first_name_1',
        isMultiKey: false,
        multiKeyPaths: { first_name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { first_name: ['["Christopher", "Christopher"]'] }
      }
    },
    rejectedPlans: []
  },
  serverInfo: {
    host: 'ibrahim',
    port: 27017,
    version: '4.4.15',
    gitVersion: 'bc17cf2c788c5dda2801a090ea79da5ff7d5fac9'
  },
  ok: 1
}

// Covered Query
db.people.find({ first_name: 'Christopher' }, { first_name: 1, _id: 0 }).explain();
const res4 = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: 'm201.people',
    indexFilterSet: false,
    parsedQuery: { first_name: { '$eq': 'Christopher' } },
    winningPlan: {
      stage: 'PROJECTION_COVERED',
      transformBy: { first_name: 1, _id: 0 },
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { first_name: 1 },
        indexName: 'first_name_1',
        isMultiKey: false,
        multiKeyPaths: { first_name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { first_name: ['["Christopher", "Christopher"]'] }
      }
    },
    rejectedPlans: []
  },
  serverInfo: {
    host: 'ibrahim',
    port: 27017,
    version: '4.4.15',
    gitVersion: 'bc17cf2c788c5dda2801a090ea79da5ff7d5fac9'
  },
  ok: 1
}

// Does not use the index.
db.people.find({
  $or: [
    { last_name: 'nonexistent' },
    { first_name: 'Christopher' }
  ]
}).explain();

// Compound Index
// Ordering on two levels.

// firstName: Ibrahim
//     // Ordered
//     lastName: Ahmed
//     lastName: Hossam
// firstName: Hossam
//     // Ordered
//     lastName: Ahmed
//     lastName: Mohamed


// Astronomy
//   A
//   B

// Physics
//   A
//   B

// Order matters
db.people.createIndex({ first_name: 1, last_name: 1 })
db.people.find({ last_name: 'nonexistent', first_name: 'Christopher' }).explain();
const res5 = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: 'm201.people',
    indexFilterSet: false,
    parsedQuery: {
      '$and': [
        { first_name: { '$eq': 'Christopher' } },
        { last_name: { '$eq': 'nonexistent' } }
      ]
    },
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { first_name: 1, last_name: 1 },
        indexName: 'first_name_1_last_name_1',
        isMultiKey: false,
        multiKeyPaths: { first_name: [], last_name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          first_name: ['["Christopher", "Christopher"]'],
          last_name: ['["nonexistent", "nonexistent"]']
        }
      }
    },
    rejectedPlans: [
      {
        stage: 'FETCH',
        filter: { last_name: { '$eq': 'nonexistent' } },
        inputStage: {
          stage: 'IXSCAN',
          keyPattern: { first_name: 1 },
          indexName: 'first_name_1',
          isMultiKey: false,
          multiKeyPaths: { first_name: [] },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: { first_name: ['["Christopher", "Christopher"]'] }
        }
      }
    ]
  },
  serverInfo: {
    host: 'ibrahim',
    port: 27017,
    version: '4.4.15',
    gitVersion: 'bc17cf2c788c5dda2801a090ea79da5ff7d5fac9'
  },
  ok: 1
}

// Multi-Key Index: An index on an array field.
// Limitation: The following fails if one document contains the two fields.
db.people.createIndex({ arrField1: 1, arrField2: 1 });

db.people.getIndexes();
db.people.dropIndex('indexName');


// Full text search
// Full text search query requires a text index.

db.people.find({ job: 'Legal executive' }).sort({ first_name: 1 }).explain()
// Option 1: Collection Scan with filter => in memory sort => return data. O(nlog(n))
// Option 2: Index Scan over all first names => fetch with filter => return data. O(n)
const r = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: 'm201.people',
    indexFilterSet: false,
    parsedQuery: { job: { '$eq': 'Legal executive' } },
    winningPlan: {
      stage: 'FETCH',
      filter: { job: { '$eq': 'Legal executive' } },
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { first_name: 1 },
        indexName: 'first_name_1',
        isMultiKey: false,
        multiKeyPaths: { first_name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { first_name: ['[MinKey, MaxKey]'] }
      }
    }
  }
}