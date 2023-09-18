let express = require("express");
let bodyparser = require("body-parser")
let multer = require("multer");

let app = express();
let upload = multer()

app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json)
app.use(upload.array())

app.get("/", (req, res) =>{
  res.render("index")
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is live and listening to ${PORT}`);
});
