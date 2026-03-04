const express = require('express');
const router = express.Router();

// Route for searching flights
router.get('/', (req, res) => {
    // Logic for searching flights
    res.send('Flight search logic here');
});

module.exports = router;