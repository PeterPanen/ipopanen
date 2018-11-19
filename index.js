const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.resolve("./public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./public", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Now listening for connections on port: ${PORT}`)
);
