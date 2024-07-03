import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const ConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
