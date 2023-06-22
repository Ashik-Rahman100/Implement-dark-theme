import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <MantineProvider
      theme={{
        fontFamily: "Open Sans",
        colorScheme: "dark",
        fontSizes: { md: "12" },
        colors: {
          blue: ["#1415", "#AE3EC9", "#9C36B5", "#7048E8", "#3B5BDB"],
        },
      }}
      
      

      withGlobalStyles
      withNormalizeCSS
    > */}
    <App />
    {/* </MantineProvider> */}
  </React.StrictMode>
);
