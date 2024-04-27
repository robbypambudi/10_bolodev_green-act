import { LatLngExpression } from "leaflet";

export type VisitorMap = {
  center: LatLngExpression
  tooltip: string;
  pathOptions: {
    color: string;
    weight: number;
    opacity: number;
    fillColor: string;
    fillOpacity: number;
  };
  radius: number;
};