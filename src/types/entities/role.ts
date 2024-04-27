export const ROLE = ['super_admin', 'admin', 'user'] as const;

export type Role = (typeof ROLE)[number];