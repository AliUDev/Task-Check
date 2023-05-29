import "./App.css";
import React from "react";
import Toast from "./shared/components/toast";
import AuthRoute from "./routes/AuthRoute";
function App() {
  return (
    <>
      <div className="App">
        <AuthRoute />
        <Toast />
      </div>
    </>
  );
}

export default App;
