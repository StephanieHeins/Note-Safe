const express = require('express');
const { getNotes } = require('../controllers/noteController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(protect, getNotes);
// router.route('/create').post()
// router.route('/:id')
//     .get()
//     .put()
//     .delete();

module.exports = router;