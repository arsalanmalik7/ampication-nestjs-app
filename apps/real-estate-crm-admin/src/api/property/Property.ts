import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  listingDate: Date | null;
  price: number | null;
  updatedAt: Date;
};
