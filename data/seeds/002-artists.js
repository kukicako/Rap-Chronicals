
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {id: 1, artistName: 'Thick Shady', artistImage: 'https://pbs.twimg.com/media/CMiqjJWWwAA0oxN?format=jpg&name=medium', artistDescription: 'This artist has all the music'},
      ]);
    });
};