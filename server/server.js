// KOPPLAT PÅ SERVER
const express = require("express");

const http = require("http");

const { Server } = require("socket.io");

const cors = require("cors");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Kallar på cors.
app.use(cors());

// Bestämmer vad som ska hända, när klient loggar på server
io.on("connection", (socket) => {
  console.log("Ny klient är påloggad", socket.id);
});

// Kör servern.
server.listen(3000, () => console.log("Servern är igång"));
