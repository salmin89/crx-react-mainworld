import React from "react";
import ReactDOM from "react-dom/client";

const div = document.createElement("div");
div.id = "crx-root";
document.body.prepend(div);

// Dynamic import because of some react refresh issue
import { Demo } from "./components/demo";
ReactDOM.createRoot(div).render(React.createElement(Demo));
