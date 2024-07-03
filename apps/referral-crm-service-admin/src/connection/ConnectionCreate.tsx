import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const ConnectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="connectedAt" source="connectedAt" />
        <SelectInput
          source="connectionStatus"
          label="connectionStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="userA" source="userA" />
        <TextInput label="userB" source="userB" />
      </SimpleForm>
    </Create>
  );
};
