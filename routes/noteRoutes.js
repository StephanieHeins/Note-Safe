const express = require('express');
const { getNotes, createNote } = require('../controllers/noteController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(protect, getNotes);

router.route('/create').post(protect, createNote);

// router.route('/:id')
//     .get()
//     .put()
//     .delete();

module.exports = router;