const PERMISSION = [
  // AUTH is Bypass permission for all users
  'auth',

  'register.personal_information.get',
  'register.personal_information.post',
  'register.document.get',
  'register.document.post',
] as const;

export type Permission = (typeof PERMISSION)[number];