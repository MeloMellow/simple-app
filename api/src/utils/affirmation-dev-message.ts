import fetch from "node-fetch";
import { ServerError } from "../presentation/errors";

export default async function affirmationDevMessage(): Promise<{} | null> {
  try {
    const response = await fetch("https://www.affirmations.dev/", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
