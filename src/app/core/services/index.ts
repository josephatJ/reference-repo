import {ManifestService} from './manifest.service';
import {HttpClientService} from './http-client.service';

export const services: any[] = [
  ManifestService,
  HttpClientService
];

export * from './http-client.service';
export * from './manifest.service';
