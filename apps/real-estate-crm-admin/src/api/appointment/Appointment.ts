import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
