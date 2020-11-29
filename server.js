const express = require("express");
const helmet = require("helmet");

const server = express();

const SongRouter = require("./songs/song-router");

server.use(helmet());
server.use(express.json());

server.use("/api/songs", SongRouter)


module.exports = server;