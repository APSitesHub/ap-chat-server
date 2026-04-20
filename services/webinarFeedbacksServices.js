const WebinarFeedbacks = require("../db/models/webinarFeedbacksModel");

const newWebinar = async (body) => await WebinarFeedbacks(body).save();

const newFeedback = async (webinarId, newFeedback) =>
  await WebinarFeedbacks.findOneAndUpdate(
    { id: webinarId },
    { $push: { feedbacks: newFeedback } }
  );

module.exports = {
  newWebinar,
  newFeedback,
};
