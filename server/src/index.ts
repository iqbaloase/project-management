import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";

/*ROUTE IMPORTS*/
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";

/*CONFIGURATIONS*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES*/
app.get("/", (req, res) => {
    res.send("This is home route")
})

app.use("/api/projects", projectRoutes)
app.use("/api/tasks", taskRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);

/*SERVER*/
const port = Number(process.env.PORT) || 3000
app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port}`)
})