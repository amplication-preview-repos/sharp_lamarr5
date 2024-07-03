import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReferralListRelationFilter } from "../referral/ReferralListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CandidateWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  referrals?: ReferralListRelationFilter;
  resume?: JsonFilter;
};
