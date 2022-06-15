import fetch from "node-fetch";

export default async function affirmationDevMessage(): Promise<JSON> {
  const response = await fetch("https://www.affirmations.dev/", {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
