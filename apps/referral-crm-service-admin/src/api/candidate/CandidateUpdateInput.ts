import { ReferralUpdateManyWithoutCandidatesInput } from "./ReferralUpdateManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  referrals?: ReferralUpdateManyWithoutCandidatesInput;
  resume?: InputJsonValue;
};
