import express from "express";
import contentType from "./middlewares/content-type";
import cors from "cors";
import jsonParser from "./middlewares/json-parser";
import router from "./routes";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(jsonParser);
app.use(contentType);
router(app);

export default app;
