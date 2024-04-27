export interface Village {
  id: number;
  subdistrict_id: number;
  zone_id: number;
  code: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export type MultiPolygon = [number, number][][];
