const express = require("express");
const helmet = require("helmet");

const server = express();

const SongRouter = require("./songs/song-router");
const ArtistRouter = require("./artists/artist-router");
const AlbumRouter = require("./albums/album-router");

server.use(helmet());
server.use(express.json());

server.use("/api/songs", SongRouter)
server.use("/api/artists", ArtistRouter)
server.use("/api/albums", AlbumRouter)


module.exports = server;