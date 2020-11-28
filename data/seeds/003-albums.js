
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {id: 1, albumName: '', albumImage: 'https://pbs.twimg.com/media/CMiqjJWWwAA0oxN?format=jpg&name=medium', albumDescription: 'This album has all the music'},
      ]);
    });
};