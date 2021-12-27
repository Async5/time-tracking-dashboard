import ReactDom from "react-dom";
import App from "./App";
import Theme from "./styles/Theme";

ReactDom.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById("root")
);
