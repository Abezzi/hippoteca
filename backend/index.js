const express = require("express");
const path = require("path");
const app = express();

// Important for Cloud Run
const PORT = process.env.PORT || 8080;

// Serve your Elstar static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Your existing API routes for mortgage credit (keep these)
app.use("/api", yourRoutes); // e.g. /api/calculate-mortgage

// Catch-all for React Router (Elstar uses it) – MUST be last!
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Mortgage Credit Simulator running on port ${PORT}`);
});
