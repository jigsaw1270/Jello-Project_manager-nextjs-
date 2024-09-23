import express from "express" ; 
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors  from "cors";
import helmet from "helmet";
import morgan from "morgan";
import projectRoutes from "./routes/projectRoutes";


// route imports 



//config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes

app.get("/",(req,res) => {
    res.send("this  is home  route");
});
app.use("/projects", projectRoutes);



//server 

const port = process.env.PORT || 3000 ;
app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
});