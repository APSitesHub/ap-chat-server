const { chat } = require("./app");
const connectDB = require("./db/connection");
require("dotenv").config();

const startServer = async () => {
  try {
    await connectDB();
    chat.listen(process.env.PORT, (error) => {
      if (error) {
        console.log("Server launch error", error);
      }
      console.log(`Chat on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(`Failed to launch chat server with an error: "${err.message}"`);
    process.exit(1);
  }
};

startServer();
