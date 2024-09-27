import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
