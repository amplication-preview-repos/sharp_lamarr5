import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ConnectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="connectedAt" source="connectedAt" />
        <TextField label="connectionStatus" source="connectionStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userA" source="userA" />
        <TextField label="userB" source="userB" />
      </SimpleShowLayout>
    </Show>
  );
};
