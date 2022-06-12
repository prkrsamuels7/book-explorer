const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchListSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Watchlist", watchListSchema);
