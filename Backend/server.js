import express  from "express";
import colors  from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoute from "./Routes/authRoute.js"
import cors from "cors";
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const _ =require("lodash");
dotenv.config();

connectDB();
const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/v1/auth",authRoute)



app.get("/",function(req,res){
    res.send("<h1>index</h1>");
  });

const PORT=process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(`Server started ${process.env.mode}on port ${PORT}`);
  });
  