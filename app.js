const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const router = require("./routers/messageRouter");
app.use(express.urlencoded({extended:true}))
app.use(router);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(assetsPath))


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
