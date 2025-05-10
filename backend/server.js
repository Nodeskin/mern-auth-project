import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

dotenv.config();
// Importing express and dotenv to manage environment variables
const app = express();
const Port = process.env.PORT || 4000;

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
