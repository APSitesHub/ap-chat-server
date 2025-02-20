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

  socket.on("connected:user", (id, room) => {
    console.log(35, id);
    console.log(36, room);
    socket.broadcast.emit("connected:user", id, room);
  });

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
    console.log("ban");
    console.log(userID);
    console.log(userIP);
    socket.emit("user:ban", userID, userIP);
    socket.broadcast.emit("user:banned", userID, userIP);
  });

  socket.on("connected:disconnect", (id, room) => {
    console.log(67, "disconnect id", id);
    console.log(68, "disconnect room", room);
    socket.broadcast.emit("connected:disconnect", id, room);
  });

  socket.on("question:asked", (data) => {
    console.log(73, data.question);
    socket.emit("question:input", data.question);
    socket.broadcast.emit("question:input", data.question);
  });

  socket.on("answer:given", (data) => {
    console.log("answer:given", data);
    socket.emit("answer:acquired", data.answer);
    socket.broadcast.emit("answer:acquired", data.answer);
  });

  socket.on("question:closed", (data) => {
    console.log(73, data.question);
    socket.emit("question:closeInput", data.question);
    socket.broadcast.emit("question:closeInput", data.question);
  });

  socket.on("disconnect", (id, room) => {
    console.log(73, "disconnect id", id);
    console.log(74, "disconnect room", room);
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
