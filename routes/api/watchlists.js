const express = require("express");
const router = express.Router();
const watchlistCtrl = require("../../controllers/api/watchlists");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// GET /api/watchlists
router.get("/:userId", watchlistCtrl.getBooks);
// POST /api/watchlists/add
router.post("/add", watchlistCtrl.addToWatchlist);

module.exports = router;
