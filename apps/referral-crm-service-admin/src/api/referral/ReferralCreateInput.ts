import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type ReferralCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  referrer?: string | null;
  remarks?: string | null;
  status?: "Option1" | null;
};
