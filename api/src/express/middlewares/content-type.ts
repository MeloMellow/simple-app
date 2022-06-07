import express from "express";
export default function contentTypeMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.type("json");
  next();
}
