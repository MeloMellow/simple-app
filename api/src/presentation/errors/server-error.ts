export class ServerError extends Error {
  constructor() {
    super("Inernal error");
    this.name = "ServerError";
  }
}
