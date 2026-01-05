// src/types/user.ts
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** ISO format date string (e.g., "1990-01-01") */
  dateOfBirth: string;
  /** URL string or null if no picture is set */
  profilePicture: string | null;
};
