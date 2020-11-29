const db = require("../data/db-config.js");


module.exports = {
    get,
    getById,
    insert,
    deleteId,
    remove
  };
  
  function get() {
    return db("songs");
  }
  
  function getById(id) {
    return db("songs")
    .where({ id });
  }
  
 async function insert(song) {
    const [id] = await db('songs').insert(song, 'id');

    return db('songs')
    .where({id})
    .first();

  }

function deleteId(id) {
   return db('songs')
   .where({ id })
   .del();
}
function remove() {
  return db('songs')
   .del('songs') 
}