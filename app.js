const express = require("express");
const logger = require("morgan");

const cors = require("cors");

const { createServer } = require("http");

const { Server } = require("socket.io");

const app = express();

const router = require("./routes/main");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/", router);

const chat = createServer(app);
const io = new Server(chat, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("connected", socket.connected, socket.handshake);
  console.log("user connected");

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("message", (data) => {
    socket.emit("message", data);
    socket.broadcast.emit("message:get", data);
  });

  socket.on("message:pin", (id, data) => {
    socket.emit("message:pin", id, data);
    socket.broadcast.emit("message:pinned", id, data);
  });

  socket.on("message:delete", (id) => {
    socket.emit("message:delete", id);
    socket.broadcast.emit("message:deleted", id);
  });

  socket.on("user:ban", (userID, userIP) => {
    console.log('ban');
    console.log(userID);
    console.log(userIP);
    socket.emit("user:ban", userID, userIP);
    socket.broadcast.emit("user:banned", userID, userIP);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = { chat };
