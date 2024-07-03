import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReferralWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
  referrer?: StringNullableFilter;
  remarks?: StringNullableFilter;
  status?: "Option1";
};
