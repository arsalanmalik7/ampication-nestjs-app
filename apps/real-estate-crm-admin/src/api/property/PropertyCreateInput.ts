import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  listingDate?: Date | null;
  price?: number | null;
};
