const args = require('yargs')
  .usage('Usage: $0 <name> <male>')
  .demand(2)
  .argv;

const noms = require('@attic/noms');
const db = noms.DatabaseSpec.parse('http://localhost:8001').database();

let ds = db.getDataset('people');

console.log('Adding %s to adddress book', args._[0]);  

ds.headValue()
  .then(data => data.append(
    noms.newStruct('', {
      given: args._[0],
      male: args._[1]
    }))
  )
  .then(data => db.commit(ds, data))
  .then(r => ds = r)
  .then(console.log("Done!"));
