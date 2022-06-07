import express from "express";
export default function corsMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.set("access-control-allow-origin", "*");
  res.set("access-control-allow-methods", "*");
  res.set("access-control-allow-headers", "*");
  next();
}
