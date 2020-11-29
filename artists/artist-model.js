const db = require("../data/db-config.js");


module.exports = {
    get,
    getById,
    insert,
    deleteId,
    remove
  };
  
  function get() {
    return db("artists");
  }
  
  function getById(id) {
    return db("artists")
    .where({ id });
  }
  
 async function insert(artist) {
    const [id] = await db('artists').insert(artist, 'id');

    return db('artists')
    .where({id})
    .first();

  }

function deleteId(id) {
   return db('artists')
   .where({ id })
   .del();
}
function remove() {
  return db('artists')
   .del('artists') 
}