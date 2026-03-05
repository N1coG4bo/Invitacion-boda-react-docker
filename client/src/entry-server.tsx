// client/src/entry-server.tsx
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render(url: string) {
  // En lugar de un hook de memoria, inyectamos la URL estática directamente 
  // al contexto del Router usando la propiedad ssrPath.
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}