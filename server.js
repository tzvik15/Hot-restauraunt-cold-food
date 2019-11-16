var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

tableArr=[];
waitArr=[];





app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/mres", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/mres.html"));
  });

  app.get("/vtable", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/vtable.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tableArr);
  });

  app.get("/api/wait", function(req, res) {
    return res.json(waitArr);
  });

  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  
    
    if (tableArr.length<=4){
    tableArr.push(newRes);
  } else waitArr.push(newRes);

    console.log(newRes)

    res.json(newRes);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });