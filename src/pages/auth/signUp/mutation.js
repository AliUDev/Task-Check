import gql from "graphql-tag";
import { setUser } from "../../../shared/redux/reducers/userSlice";
import { toastMessage } from "../../../shared/components/toast";

export const signnUpMutation = gql`
  mutation CreateUser($input: addUserInput!) {
    addUser(input: $input) {
      user {
        _id
        username
        createdAt
        profilePic
      }
      token
    }
  }
`;

export const SignUpHelper = (signup, dispatch, action, data2) => {
  signup({ variables: { input: data2 } })
    .then(({ data, loading, error }) => {
      if (data) {
        toastMessage("Account created Successfully", "success");
        action.setSubmitting(loading);
        let resp = {
          isLoggedIn: true,
          user: data?.addUser?.user,
          token: data?.addUser?.token,
        };
        dispatch(setUser(resp));
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
