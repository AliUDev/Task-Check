import gql from "graphql-tag";
import { setUser } from "../../../shared/redux/reducers/userSlice";
import { toastMessage } from "../../../shared/components/toast";

export const addPetMutation = gql`
  mutation CreatePet($input: addPet!) {
    addPet(input: $input) {
      _id
      name
      type
      picture
    }
  }
`;

export const AddPetHelper = (addPet, action, onAddPetSuccessful, data2) => {
  addPet({ variables: { input: data2 } })
    .then(({ data, loading, error }) => {
      if (data) {
        toastMessage("Pet Added Successfully", "success");
        onAddPetSuccessful(data?.addPet);
        action.setSubmitting(loading);
      } else {
        console.log("here", error[0]);
        toastMessage(error, "error");
        action.setSubmitting(loading);
      }
    })
    .catch((err) => {
      action.setSubmitting(false);
      toastMessage(err.message, "error");
    });
};
