// const express = require("express");
// const cors = require("cors");
// const app = express();
// //const user = require("./user");
// // will help u to parse the body of the request :: POST METHOD
// app.use(express.json());
// app.use(cors());
// // MEMORY DATABASE :: LIST DATABASE :: RESET ON EVERY START
// const userList = [];

// app.get("/user1", (req, res) => {
//   res.json(userList);
// });

// app.get("/user1/:userId", (req, res) => {
//   const userId = req.params.userId;

//   for (let i = 0; i < userList.length; i++) {
//     let item = userList[i];

//     if (item.id == userId) {
//       res.json(item);
//       return;
//     }
//   }

//   res.json({ msg: "User not found" });
// });

// app.post("/user1", (req, res) => {
//   // logic to add new user
//   const newUser = req.body;
//   newUser.id = userList.length + 1;

//   userList.push(newUser);
//   res.json({ msg: "user added successfully" });
// });

// // :userId => Path Parameter
// app.put("/user1/:userId", (req, res) => {
//   const userId = req.params.userId;

//   let findItem;
//   for (let i = 0; i < userList.length; i++) {
//     let item = userList[i];
//     if (item.id == userId) {
//       findItem = item;
//       break;
//     }
//   }

//   if (findItem) {
//     findItem.username = req.body.username;
//     findItem.password = req.body.password;
//     findItem.email = req.body.email;
//     findItem.mobile = req.body.mobile;
//     findItem.city = req.body.city;
//   }

//   res.json({ msg: "user updated successfully" });
// });
const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./sup");
app.use(express.json());
app.use(cors());
app.get("/user1", (req, res) => {
  const list = user.getAllUser();
  res.json(list);
});

app.get("/user1/:userId", (req, res) => {
  const userId = req.params.userId;
  const foundUser = user.getUserById(userId);
  foundUser ? res.json(foundUser) : res.json({ msg: "User not found" });
});

app.post("/user1", (req, res) => {
  user.addUser(req.body);
  res.json({ msg: "user added successfully" });
});

// :userId => Path Parameter
app.put("/user1/:userId", (req, res) => {
  const userId = req.params.userId;
  user1.updateUser(userId, req.body);
  res.json({ msg: "user updated successfully" });
});



app.listen(3000, () => console.log("server started"));