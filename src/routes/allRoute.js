import Home from "pages/home";
import { Login, SignUp } from "pages/auth";

const publicRoute = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  
];
const privateRoute = [
  {
    path: "/home",
    title: "Home",
    component: Home,
  },
];

export { publicRoute, privateRoute };
