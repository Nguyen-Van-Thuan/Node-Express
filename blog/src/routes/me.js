const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
// newsController.index

router.get('/stored/coures', meController.storedCoures);

module.exports = router;
