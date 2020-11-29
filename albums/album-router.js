const express = require("express");

const Album = require("./album-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Album.get()
    .then(album => {
      res.status(200).json(album);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Album from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Album.getById(id)
    .then(apply => {
      if (!apply[0]) {
        res.status(404).json({ message: "Invalid Album ID" });
      } else {
        res.status(200).json(apply);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Album from database" });
    });
});

router.post("/", (req, res) => {
  const apply = req.body;

  Album.insert(apply)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding Album to database" });
    });
});

router.delete('/:id', (req, res) => {
  Album.deleteId(req.params.id)
  .then(apply => {
      console.log(apply)
      if (!apply) {
          res.status(404).json({message: " No Album exists by that ID!"})
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

  Album.remove(apply)
  .then(count => {
    res.status(201).json(count);
  })
  .catch(err => {
    res.status(500).json({ message: "Error deleting all Albums to database" });
  });
    
});


module.exports = router; 