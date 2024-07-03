import { Referral } from "../referral/Referral";
import { JsonValue } from "type-fest";

export type Candidate = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  referrals?: Array<Referral>;
  resume: JsonValue;
  updatedAt: Date;
};
