import { Candidate } from "../candidate/Candidate";

export type Referral = {
  candidate?: Candidate | null;
  createdAt: Date;
  id: string;
  referrer: string | null;
  remarks: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
