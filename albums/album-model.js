const db = require("../data/db-config.js");


module.exports = {
    get,
    getById,
    insert,
    deleteId,
    remove
  };
  
  function get() {
    return db("albums");
  }
  
  function getById(id) {
    return db("albums")
    .where({ id });
  }
  
 async function insert(album) {
    const [id] = await db('albums').insert(album, 'id');

    return db('albums')
    .where({id})
    .first();

  }

function deleteId(id) {
   return db('albums')
   .where({ id })
   .del();
}
function remove() {
  return db('albums')
   .del('albums') 
}