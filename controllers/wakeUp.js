const wakeUp = async (_, res) => {
  res.status(200).json({message: "Welcome to AP Chat. Here we don't know how to do things, but we do anyway."});
};

module.exports = wakeUp;
