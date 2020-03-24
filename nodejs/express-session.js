var express = require("express");
var session = require("express-session");
var FileStore = require("session-file-store")(session);

var app = express();

// request객체에 session객체를 추가해줌
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
  })
);

app.get("/", function(req, res, next) {
  console.log(req.session);
  if (req.session.num === undefined) {
    req.session.num = 1;
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`Views: ${req.session.num}`);
});

app.listen(3000, function() {
  console.log("3000!");
});
