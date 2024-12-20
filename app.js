console.log("Web Server Start");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});


// MongoDB Call
const db = require("./server").db();
const mongodb = require("mongodb");


// 1: Kirish code //
app.use(express.static("public")); // user uchun ochiq bo'lgan folder
app.use(express.json()); // json formatda kelgan ma'lumotlarni objectga o'girib beradi
app.use(express.urlencoded({extended: false}));


// 2: Session code //

// 3: Views code //
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routing code //
app.post("/create-item", (req, res) => {
    // TODO: code with db here
    // Modern Post
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {

        // Traditional Post

        // if (err) {
        //     console.log(err);
        //     res.end("something went wrong");
        // } else {
        //     res.end("successfully added");
        // }

        // console.log(data.ops);
        res.json(data.ops[0]);
    });
});


// Delete oper
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function(err, data) {
        res.json({ state: "success" });
    });
});


// Edit oper
app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) }, 
        { $set: {reja: data.new_input} }, 
        function(err, data) {
            res.json({ state: "success" });
    });
});


// Delete all
app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({ state: "hamma rejalar o'chirildi" });
        });
    }
});


// Portfolio
app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err,data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render("reja", {items: data});
        }
    });
});


module.exports = app;