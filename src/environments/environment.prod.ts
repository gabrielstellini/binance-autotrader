import { EnvironmentModel } from './environment.model';

export const environment: EnvironmentModel = {
  production: true,
  wsEndpoint: 'ws://192.168.2.199:8085',
  reconnectInterval: 2000
};
