const express = require("express");
const app = express();
app.get("/user", (req, res) =>  {
  res.json({ id: `${req.query.id}`, name:`${req.query.name}`, contact:`${req.query.contact}`, lastName:`${req.query.lastname}` });
}
);







app.listen(3000, () => console.log("server started"));

/////////////////////////////////////

