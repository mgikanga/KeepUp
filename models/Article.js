var mongoose = require("mongoose");
// reference to the Schema constructor
var Schema = mongoose.Schema;

//create a new UserSchema object
var ArticleSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    Link:{
        type: String,
        required: true
    },
    note:{
        // note is an object that stores a note id
        type: Schema.Types.ObjectId,
        // use ref property to link the objectid to teh note model
        // this allows us to populate the Article with an associate note
        ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;

