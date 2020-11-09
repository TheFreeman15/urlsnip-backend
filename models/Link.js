const mongoose = require('mongoose');
const {Schema} = mongoose;


const linkSchema = new Schema({
    slug: String,
    destination: String,
    expireAt: {
        type: Date,
        default: Date.now,
        createIndexes: { expires: '1m' },
      },
 
});

const Link = mongoose.model('link',linkSchema);
module.exports = Link;