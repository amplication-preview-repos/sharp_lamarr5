import { ReferralCreateNestedManyWithoutCandidatesInput } from "./ReferralCreateNestedManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  referrals?: ReferralCreateNestedManyWithoutCandidatesInput;
  resume?: InputJsonValue;
};
