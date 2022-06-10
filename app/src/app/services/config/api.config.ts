export abstract class Api {
  public static readonly apiHost: string =
    process.env['HOST'] || 'http://localhost';
  public static readonly apiPort: string = process.env['PORT'] || '3434';
  public static readonly apiUrl: string = this.apiHost + ':' + this.apiPort;
  constructor() {}
}
