const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Statik dosyalar
app.use(express.static(path.join(__dirname, "public")));

// Ana sayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Kayıt sayfası
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

// Lobi sayfası
app.get("/lobby", (req, res) => {
  res.sendFile(path.join(__dirname, "public/lobby", "lobby.html"));
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
