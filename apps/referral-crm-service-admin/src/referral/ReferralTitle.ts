import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "referrer";

export const ReferralTitle = (record: TReferral): string => {
  return record.referrer?.toString() || String(record.id);
};
