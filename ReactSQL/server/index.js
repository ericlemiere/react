const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const location = req.body.location;
  const position = req.body.position;
  const salary = req.body.salary;

  db.query(
    `INSERT INTO employees (name, age, location, position, salary)
            VALUES (?,?,?,?,?)`,
    [name, age, location, position, salary],
    (err, result) => {
      if (err) console.log(err);
      else res.send("Values Inserted");
    }
  );
});

app.post("/delete", (req, res) => {
  const id = req.body.id;
  const sqlDelete = `DELETE FROM employees WHERE id=${id}`;

  db.query(sqlDelete, (err, result) => {
    if (err) console.log(err);
    else res.send(id + " Deleted");
  });
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// ========================================================================
//        SORT AGE
// ========================================================================
app.get("/sortAgeASC", (req, res) => {
  db.query("SELECT * FROM employees ORDER BY age ASC", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/sortAgeDESC", (req, res) => {
  db.query("SELECT * FROM employees ORDER BY age DESC", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});


// ========================================================================
//        SORT SALARY
// ========================================================================
app.get("/sortSalaryASC", (req, res) => {
  db.query("SELECT * FROM employees ORDER BY salary ASC", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/sortSalaryDESC", (req, res) => {
  db.query("SELECT * FROM employees ORDER BY salary DESC", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});


// ========================================================================
//        SORT POSITION
// ========================================================================
app.get("/sortPositionASC", (req, res) => {
  db.query("SELECT * FROM employees ORDER BY position ASC", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/sortPositionDESC", (req, res) => {
  db.query("SELECT * FROM employees ORDER BY position DESC", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});


app.listen(3002, () => {
  console.log("Server is running on port 3002.");
});
