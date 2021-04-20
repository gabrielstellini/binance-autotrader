import { EnvironmentModel } from './environment.model';

export const environment: EnvironmentModel = {
  production: false,
  wsEndpoint: 'ws://192.168.2.199:8085',
  reconnectInterval: 2000
};

// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
