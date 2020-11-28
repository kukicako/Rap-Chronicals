
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {id: 1, songName: 'da boiz', songLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO', description: 'This song freaking smacks'},
      ]);
    });
};
