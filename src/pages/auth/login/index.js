import { Formik } from "formik";
import { LoginVS } from "../../../shared/utils/validation";
import { LoginHelper } from "./query";
import { useDispatch } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { loginQuery } from "./query";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLazyQuery(loginQuery);

  const initialValues = {
    username: "",
    password: "",
  };

  const handleLogIn = async (values, action) => {
    const data2 = {
      username: values.username,
      password: values.password,
    };

    LoginHelper(login, dispatch, action, data2);
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => {
              action.setSubmitting(true);
              handleLogIn(values, action);
            }}
            validationSchema={LoginVS}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <div className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="relative">
                    <input
                      id="email-address"
                      name="email"
                      type={"text"}
                      placeholder="David"
                      onChange={handleChange("username")}
                      value={values.username}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                    />
                    <div className="error">
                      {touched.username && errors.username
                        ? errors.username
                        : ""}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange("password")}
                      value={values.password}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                      placeholder="Password"
                    />
                    <div className="error">
                      {touched.password && errors.password
                        ? errors.password
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="/create-user"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Create Account?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isSubmitting ? (
                      <svg
                        class="animate-spin h-5 w-5 spinner"
                        // viewBox="0 0 24 24"
                      ></svg>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
