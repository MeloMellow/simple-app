import express from "express";
import { ExpressRouterAdapter } from "../adapters/express-router-adapter";
import CreateBookRouterFactory from "../factories/create-book-router-factory";
import DeleteBookRouterFactory from "../factories/delete-book-router-factory";
import ReadBookRouterFactory from "../factories/read-book-router-factory";
import ReadBooksRouterFactory from "../factories/read-books-router-factory";
import UpdateBookRouterFactory from "../factories/update-book-router-factory";

export default function (router: express.Router) {
  router.post(
    "/books",
    ExpressRouterAdapter.adapt(CreateBookRouterFactory.make())
  );
  router.put(
    "/books/:id",
    ExpressRouterAdapter.adapt(UpdateBookRouterFactory.make())
  );
  router.get(
    "/books",
    ExpressRouterAdapter.adapt(ReadBooksRouterFactory.make())
  );
  router.get(
    "/books/:id",
    ExpressRouterAdapter.adapt(ReadBookRouterFactory.make())
  );
  router.delete(
    "/books/:id",
    ExpressRouterAdapter.adapt(DeleteBookRouterFactory.make())
  );
}
