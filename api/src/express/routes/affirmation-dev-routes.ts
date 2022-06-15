import express from "express";
import affirmationDevMessage from "../../utils/affirmation-dev-message";

export default function (router: express.Router) {
  router.get("/affirmation-dev", async (req, res) => {
    const data = await affirmationDevMessage();
    res.send(data);
  });
}
