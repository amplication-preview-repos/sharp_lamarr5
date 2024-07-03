import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type ReferralUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  referrer?: string | null;
  remarks?: string | null;
  status?: "Option1" | null;
};
