import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/articles", (req, res) => {
    res.render("articles.ejs");
});

app.get("/essay", (req, res) => {
    res.render("essay.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/news", (req, res) => {
    res.render("news.ejs");
});

app.get("/quotes", (req, res) => {
    res.render("quotes.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.post("/submit", (req,res) => {
    res.render("contact.ejs");
})







app.listen(port, () => {
    console.log(`server is listening from ${port}.`)
});