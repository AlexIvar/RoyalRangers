var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var dateFormat = require('x-date');
var cors = require('cors');
var autoIncrement = require("mongodb-autoincrement");
var ObjectID = mongodb.ObjectID;

const url = require('url');

var CONTACTS_COLLECTION = "Users";
var POSTS_COLLECTION = "Posts";

var MONGODB_URI = 'mongodb://admin:pass@ds155132.mlab.com:55132/royalrangersdb';

var app = express();
app.use(bodyParser.json());
app.use(cors());
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(MONGODB_URI, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({
    "error": message
  });
}

/*  "/api/users"
 *    GET: finds all users
 *    POST: creates a new user
 */

//gets list of all users
app.get("/api/users", function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});


//creates a new post
app.post("/api/posts", function(req, res) {
  //var newPost = req.body;
  var id;

  if (!req.body.title || !req.body.content) {
    handleError(res, err.message, "Title and content of post are required.");
  }

console.log("when : " + req.body.when);

  autoIncrement.getNextSequence(db, POSTS_COLLECTION, function(err, autoIndex){
    if(err){
      handleError(res, err.message, "Failed to create id.");
    } else{
      var newPost = {
        id: autoIndex,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        date: new Date().format('dd-mm-yyyy'),
        when: new Date().format('dd-mm-yyyy')
      };

      console.log(newPost);

      db.collection(POSTS_COLLECTION).insertOne(newPost, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create post.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
    }
  });

});


//gets all created posts
app.get("/api/posts", function(req, res) {
  db.collection(POSTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get posts.");
    } else {
      res.status(200).json(docs);
    }
  });
});
