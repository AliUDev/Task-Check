import React, { useEffect } from "react";

function Layout(props) {
  useEffect(() => {
    ChangeTitle(props?.title);
  });
  const ChangeTitle = (string) => {
    document.title = ` ${string} | Graph Template `;
  };

  return (
    <div style={{ minHeight: "calc(100vh - 400px)" }}>
      {" "}
      <props.component {...props} />
    </div>
  );
}

export default Layout;
