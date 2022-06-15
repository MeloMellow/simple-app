import express from "express";
import affirmationDevMessage from "../../utils/affirmation-dev-message";

export default function (router: express.Router) {
  router.get("/affirmation-dev", async (req, res) => {
    const data = await affirmationDevMessage();
    if (data) {
      res.send(data);
    } else {
      res.status(500).send();
    }
  });
}
