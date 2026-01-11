import express from "express"
import moviesRoutes from "./routes/movieRoutes.js"

const app = express();

app.use(express.json())

app.get("/", (_req, res) => {
    res.send("Server is up and running")
});

app.use("/api/movies", moviesRoutes)


export default app;