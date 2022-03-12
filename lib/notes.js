
const fs = require("fs");
const path = require("path");

//var { notes } = require("../db/db.json");

// find id to display note
findById = function(id){
  const result = notes.filter(note => note.id === id)[0];
  return result;
};

// create new note
createNewNote = function(body, notes){
  const note =  body;

  notes.push(note);
  
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  
  return note;
};

// validate note to see if sections are filled
validateNote = function(note){
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
};

module.exports = {
  findById,
  createNewNote,
  validateNote
}