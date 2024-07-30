const mysql = require("mysql");

const connectDatabase = async () => {
  try {
    // MySQL Connection
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "AtkltDB",
    });

    // Connect to MySQL
    db.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
      }
      console.log("Connected to MySQL as ID " + db.threadId);
    });
  } catch (error) {
    console.error("Error connecting to MySQL: " + error.stack);
    return;
  }
};

module.exports = connectDatabase;
