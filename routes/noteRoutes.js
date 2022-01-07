const express = require('express');
const { getNotes, createNote, getNoteById, updateNote } = require('../controllers/noteController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(protect, getNotes);

router.route('/create').post(protect, createNote);

router.route("/:id").get(getNoteById).put(protect, updateNote);

// router.route('/:id')
//     .get()
//     .put()
//     .delete();

module.exports = router;