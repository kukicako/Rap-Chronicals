
exports.up = function(knex) {
    return knex.schema
    .createTable("songs", tbl => {
      tbl.increments();
      tbl
          .string("songName", 500)
          .notNullable();
      tbl
          .string("songLink", 240)
      tbl
          .string("description")
          .notNullable();
    })
    .createTable("artists", tbl => {
      tbl.increments();
      tbl
          .string("artistName", 240)
          .notNullable();
      tbl
          .string('artistImage', 500)
          .notNullable();
      tbl
          .string('artistDescription')
          .notNullable();
    })
    .createTable("albums", tbl => {
      tbl.increments();
      tbl
          .string('albumName', 500)
          .notNullable();
      tbl
          .string('albumImage', 500)
          .notNullable();
      tbl
          .string('albumDescription')
          .notNullable()
    })
  
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists("songs")
      .dropTableIfExists('artists')
      .dropTableIfExists('albums')
  };