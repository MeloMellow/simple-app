import { environment } from '../../../environments/environment';

export abstract class Api {
  public static readonly apiHost: string =
    environment['API_HOST'] || 'http://localhost';
  public static readonly apiPort: string = environment['API_PORT'] || '3434';
  public static readonly apiUrl: string = this.apiHost + ':' + this.apiPort;
  constructor() {}
}
