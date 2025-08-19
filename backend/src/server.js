const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth.routes");
const asmRoutes = require("./routes/assessment.routes");

app.use("/api/auth", authRoutes);
app.use("/api/assessments", asmRoutes);

// No db.sync here, manual table creation
console.log("Server started without auto sync");

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
