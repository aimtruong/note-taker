
const router = require("express").Router();

const { findById, createNewNote } = require("../../lib/notes");

const { notes } = require("../../db/db.json");

// get unique id UUID
const { v4: uuidv4 } = require("uuid");

// GET all notes and display
router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

// GET a note and display
router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  }
  else {
    res.send(404);
  }
});
  
// to validate note's info and post it
router.post('/notes', (req, res) => {

  const { title, text } = req.body;

  // check if title and text are filled before posting
  if(title && text){
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }
    
    const note = createNewNote(newNote, notes);
    res.json(note);
  }
  else{
    res.json("Error in posting note");
  }
});
  
module.exports = router;
  