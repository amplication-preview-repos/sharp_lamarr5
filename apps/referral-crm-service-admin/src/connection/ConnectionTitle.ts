import { Connection as TConnection } from "../api/connection/Connection";

export const CONNECTION_TITLE_FIELD = "userA";

export const ConnectionTitle = (record: TConnection): string => {
  return record.userA?.toString() || String(record.id);
};
