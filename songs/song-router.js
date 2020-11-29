const express = require("express");

const Song = require("./song-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Song.get()
    .then(song => {
      res.status(200).json(song);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Song from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Song.getById(id)
    .then(apply => {
      if (!apply[0]) {
        res.status(404).json({ message: "Invalid song ID" });
      } else {
        res.status(200).json(apply);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Song from database" });
    });
});

router.post("/", (req, res) => {
  const apply = req.body;

  Song.insert(apply)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding Song to database" });
    });
});

router.delete('/:id', (req, res) => {
  Song.deleteId(req.params.id)
  .then(apply => {
      console.log(apply)
      if (!apply) {
          res.status(404).json({message: " No Song exists by that ID!"})
      } else {
          res.status(200).json({message: "deleted"})
      }
  })
  .catch(err => {
      console.log(err)
      res.status(500).json(err)
  })
}) 

router.delete("/", (req, res) => {
  const apply = req.body;

  Song.remove(apply)
  .then(count => {
    res.status(201).json(count);
  })
  .catch(err => {
    res.status(500).json({ message: "Error deleting all Songs to database" });
  });
    
});


module.exports = router; 