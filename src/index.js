import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, persistor } from "./shared/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./shared/services/apolloClient";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ApolloProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
