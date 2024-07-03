import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  connectedAt?: SortOrder;
  connectionStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userA?: SortOrder;
  userB?: SortOrder;
};
