import { SortOrder } from "../../util/SortOrder";

export type ReferralOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  referrer?: SortOrder;
  remarks?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
