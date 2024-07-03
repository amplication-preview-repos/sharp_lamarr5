import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConnectionWhereInput = {
  connectedAt?: DateTimeNullableFilter;
  connectionStatus?: "Option1";
  id?: StringFilter;
  userA?: StringNullableFilter;
  userB?: StringNullableFilter;
};
