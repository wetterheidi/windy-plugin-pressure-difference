
import type { LatLon } from '@windy/interfaces.d';
import type { PointProducts } from '@windy/rootScope.d';

export type Modell = 'ICON-D2' | 'ICON' | 'ECMWF' | 'ICON-EU' | 'ALADIN' | 'AROME';

/* Maps the label shown in the UI onto the Windy product id used by the forecast API */
export type Models = Record<Modell, PointProducts>;

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

