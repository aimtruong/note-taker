
const router = require("express").Router();

const { findById, createNewNote, validateNote } = require("../../lib/notes");

const { notes } = require("../../db/db.json");

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
  //console.log(req.body);

  const { title, text } = req.body;

  if(title && text){
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    
    const response = {
      status: "success",
      body: newNote
    };

    if (!validateNote(newNote)) {
      res.status(400).send('The note is not properly formatted.');
    }
    else {
      const note = createNewNote(newNote, notes);
      res.json(response);
      req.json(note);
    }

  }
  else{
    res.json("Error in posting note");
  }
  //  req.body = notes.toString();
});
  
module.exports = router;
  