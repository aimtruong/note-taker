
const router = require("express").Router();

const { findById, createNewNote, validateNote } = require("../../lib/notes");

const { notes } = require("../../db/db.json");


// to get one note and display
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
// to validate note's info and post it
router.post('/notes', (req, res) => {

    req.body = notes.toString();

  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
});
  
module.exports = router;
  