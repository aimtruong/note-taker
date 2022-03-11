const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

// to get note's info from api
router.use(notesRoutes);

module.exports = router;
