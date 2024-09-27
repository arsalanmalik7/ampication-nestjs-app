import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  id?: StringFilter;
  listingDate?: DateTimeNullableFilter;
  price?: FloatNullableFilter;
};
