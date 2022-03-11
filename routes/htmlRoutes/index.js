
const path = require("path");
const router = require("express").Router();


// to display index.html when open
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// to display notes.html when button is clicked
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// to display index.html whenever error
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;