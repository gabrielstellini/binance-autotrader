import { EnvironmentModel } from './environment.model';

export const environment: EnvironmentModel = {
  production: true,
  wsEndpoint: 'ws://127.0.0.1:8085',
  reconnectInterval: 2000
};
