import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};
