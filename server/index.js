import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/admin.js";
import studentRoutes from "./routes/student.js";
import teacherRoutes from "./routes/teacher.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
