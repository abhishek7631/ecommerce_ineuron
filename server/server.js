const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

const Jwt = require("jsonwebtoken");
const jwtKey = "sam";

app.post("/register", (req, res) => {
  console.log(req.body);
  let email = req.body["email"];
  let password = req.body["password"];
  let firstname = req.body["firstName"];
  let lastname = req.body["lastName"];

  let query = `insert into account(email,password,firstname,lastname) values('${email}','${password}','${firstname}','${lastname}');`;

  pool.query(query).then((response) => {
    console.log(response);
    if (response.rowCount === 1) {
      Jwt.sign(
        { status: "success" },
        jwtKey,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            res.send({ status: "Error Occured..." });
          }
          res.send({ status: "success", auth: token });
        }
      );
    } else {
      res.send(response);
    }
  });
});

app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let query = `select * from account where email='${email}' and password='${password}';`;

  pool.query(query).then((response) => {
    if (response.rowCount === 0) {
      res.send({ status: "User Not Found or Wrong Password" });
    } else {
      console.log(response.rows);
      delete response.rows[0]["password"];
      delete response.rows[0]["userid"];
      Jwt.sign(
        { status: "success" },
        jwtKey,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            res.send("Error Occured...");
          }
          res.send({ status: "success", userData: response.rows, auth: token });
        }
      );
    }
  });
});

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send({ status: "Invalid Token" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ status: "Missing Authetication Token" });
  }
}

app.listen(4000, () => console.log("Server running on 4000"));
