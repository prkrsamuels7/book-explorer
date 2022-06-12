const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  apiId: { type: String, required: true },
  title: { type: String, required: true },
  authors: [{ type: String }],
  publisher: { type: String },
  publishedDate: { type: String },
  description: { type: String },
  categories: [{ type: String }],
  rating: { type: Number },
  imageLinks: { type: Object },
  watchers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Book", bookSchema);
