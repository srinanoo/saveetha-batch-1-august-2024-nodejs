const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    description: String,
    active: Boolean,
    phone: Number
});

const BlogModel = mongoose.model("blogposts", BlogSchema);

module.exports = BlogModel;