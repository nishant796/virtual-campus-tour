/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface AdmissionApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  dob: string; // ISO date
  gender: "Male" | "Female" | "Other";
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  level: "UG" | "PG";
  program: string;
  previousEducation: string; // summary
  yearOfPassing: string;
  guardianName: string;
  guardianPhone: string;
  statement: string;
}
