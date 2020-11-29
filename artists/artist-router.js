const express = require("express");

const Artist = require("./artist-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Artist.get()
    .then(artist => {
      res.status(200).json(artist);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Artist from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Artist.getById(id)
    .then(apply => {
      if (!apply[0]) {
        res.status(404).json({ message: "Invalid Artist ID" });
      } else {
        res.status(200).json(apply);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Artist from database" });
    });
});

router.post("/", (req, res) => {
  const apply = req.body;

  Artist.insert(apply)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding Artist to database" });
    });
});

router.delete('/:id', (req, res) => {
  Artist.deleteId(req.params.id)
  .then(apply => {
      console.log(apply)
      if (!apply) {
          res.status(404).json({message: " No Artist exists by that ID!"})
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

  Artist.remove(apply)
  .then(count => {
    res.status(201).json(count);
  })
  .catch(err => {
    res.status(500).json({ message: "Error deleting all Artists to database" });
  });
    
});


module.exports = router; 