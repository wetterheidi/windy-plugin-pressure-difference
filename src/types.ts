
import type { LatLon } from '@windy/interfaces.d';

export type Modell = 'ICON-D2' | 'ICON' | 'ECMWF' | 'ICON-EU' | 'ALADIN' | 'AROME';

export type Models = Record<Modell, string>;

export type CrossSection = {
  start: string;
  end: string;
  windName: string;
  models: Modell[];
  topText?: string;
  bottomText?: string;
  remark?: string;
};

export type EndPoint = Record<string, LatLon>;

