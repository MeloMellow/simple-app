export class ApiConfig {
  public readonly apiHost: string = process.env['HOST'] || 'http://localhost';
  public readonly apiPort: string = process.env['PORT'] || '3434';
  public readonly apiUrl: string = this.apiHost + ':' + this.apiPort;
  constructor() {}
}
