const noms = require('@attic/noms');
const db = noms.DatabaseSpec.parse('http://localhost:8000').database();

let ds = db.getDataset('people');

let data = new noms.List([
  noms.newStruct('', {
    given: 'Rickon',
    male: true,
  }),
  noms.newStruct('', {
    given: 'Bran',
    male: true,
  }),
  noms.newStruct('', {
    given: 'Arya',
    male: false,
  }),
  noms.newStruct('', {
    given: 'Sansa',
    male: false,
  }),
]);

db.commit(ds, data).
  then(r => ds = r);
