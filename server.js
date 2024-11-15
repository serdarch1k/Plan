console.log("Web Server Start");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

// 1 //
app.use(express.static("public")); // user uchun ochiq bo'lgan folder
app.use(express.json()); // json formatda kelgan ma'lumotlarni objectga o'girib beradi
app.use(express.urlencoded({extended: true}));

// 2 //

// 3 //
app.set("views", "views");
app.set("view engine", "ejs");

// 4 //
app.post("/create-item", (req, res) => {
    // TODO: code with db here
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});