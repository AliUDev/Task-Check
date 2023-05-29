import gql from "graphql-tag";
import { setUser } from "shared/redux/reducers/userSlice";
import { toastMessage } from "shared/components/toast";

export const loginQuery = gql`
  query LoginUser($input: loginInput!) {
    login(input: $input) {
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

export const LoginHelper = (login, dispatch, action, data2) => {
  login({ variables: { input: data2 } })
    .then((res) => {
      const { data, loading, error } = res;
      console.log(res);
      if (data) {
        toastMessage("User Logged In Successfully", "success");
        action.setSubmitting(loading);
        let resp = {
          isLoggedIn: true,
          user: data?.login?.user,
          token: data?.login?.token,
        };
        dispatch(setUser(resp));
      } else {
        toastMessage(error.message, "error");
        action.setSubmitting(loading);
      }
    })
    .catch((err) => {
      console.log("I amm here", err);
      action.setSubmitting(false);
      toastMessage(err[0].message, "error");
    });
};
