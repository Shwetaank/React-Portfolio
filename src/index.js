import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
