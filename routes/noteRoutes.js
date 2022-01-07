const express = require('express');
const { getNotes, createNote, getNoteById } = require('../controllers/noteController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(protect, getNotes);

router.route('/create').post(protect, createNote);

router.route("/:id").get(getNoteById);

// router.route('/:id')
//     .get()
//     .put()
//     .delete();

module.exports = router;