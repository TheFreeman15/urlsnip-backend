const mongoose = require('mongoose');
const {Schema} = mongoose;


const linkSchema = new Schema({
    slug: String,
    destination: String,
    expiresin : Number, 
 
});

const Link = mongoose.model('link',linkSchema);
module.exports = Link;