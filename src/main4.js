const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.json());

// read the data :: FROM BODY
app.post("/users1", (req, res) => {
  res.json({ name: req.body.name ,lastName: req.body.lastname, city: req.body.city});
});

app.listen(3000, () => console.log("server started"));