import * as yup from "yup";

const LoginVS = yup.object().shape({
  username: yup.string().required("Username is Required").label("username"),
  password: yup.string().required("Password is Required").label("password"),
});
const SignUpVS = yup.object().shape({
  username: yup.string().required("Username is Required").label("username"),
  password: yup.string().required("Password is Required").label("password"),
  profilePic: yup
    .mixed()
    .required("Profile Photo is Required")
    .label("profilePic"),
});

const AddPetVS = yup.object().shape({
  name: yup.string().required("Name is Required").label("name"),
  type: yup.string().required("Type is Required").label("type"),
  picture: yup.mixed().required("Pet Photo is Required").label("picture"),
});

export { LoginVS, SignUpVS, AddPetVS };
