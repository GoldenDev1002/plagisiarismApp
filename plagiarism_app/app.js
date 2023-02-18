let express = require("express");
let app = express();

let path = require("path");
let publicPath = path.resolve(__dirname, "publicFolder")
app.use(express.static(publicPath));
let connect = require("./db/connection");
app.set("view engine", "ejs")
let cors = require("cors");
let bodyParser = require("body-parser");
let pageRoutes = require("./routes/pageRoute");
let port = 4500;
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
require("dotenv").config()

app.use(cors());
app.use("/pages", pageRoutes);

let start = async ()=> {
    try{
      await connect (process.env.MONGO_URL);
      app.listen(port, ()=> {
        console.log("to the 4500 server");
    })
    }catch(err){
        console.log(err);
    }
}

start();