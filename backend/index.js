const express = require("express");
const connectDatabase = require("./config/sqldb");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;
// Middleware
app.use(bodyParser.json());

// Call the function to connect to the database
connectDatabase();

// // Routes
// app.get("/api/users", (req, res) => {
//   db.query("SELECT * FROM users", (err, results) => {
//     if (err) {
//       console.error("Error executing query: " + err.stack);
//       res.status(500).send("Error fetching users");
//       return;
//     }
//     res.json(results);
//   });
// });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
