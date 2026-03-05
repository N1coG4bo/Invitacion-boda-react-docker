// client/src/entry-client.tsx
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// En lugar de crear la estructura desde cero, React se "enganchará" al HTML existente.
hydrateRoot(document.getElementById("root")!, <App />);