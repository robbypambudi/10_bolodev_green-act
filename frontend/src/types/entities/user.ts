export type User = {
  id: number;
  name: string;
  email: string;
  type: string;

  // Optional
  phone?: string;
  points?: number;

  token: string;

};