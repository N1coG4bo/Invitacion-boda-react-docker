import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { MusicPlayer } from "./components/MusicPlayer";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Sobre} />
      <Route path={"/invitacion"} component={Home} />
      {/* Fallback route */}
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook


function App() {
  // 2. Obtenemos la ruta actual
  const [location] = useLocation();

  // 3. Lógica para decidir si mostrar el reproductor
  // Solo lo mostramos si la ruta es exactamente "/" (el sobre)
  // Nota: Si quieres que se oculte en TODAS menos el sobre, esta lógica es perfecta.
  const isPlayerVisible = location === "/";

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          
          {/* 4. REPRODUCTOR GLOBAL "FANTASMA"
             - Siempre está montado (por eso la música no se corta).
             - Usamos clases dinámicas para mostrarlo u ocultarlo visualmente.
             - hidden: Oculta el elemento (display: none), pero no lo destruye.
             - flex: Lo muestra (y permite centrarlo).
          */}
          <div 
            className={`
              w-[90%] fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
              transition-opacity duration-500
              ${isPlayerVisible ? "flex opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"}
            `}
          >
            <MusicPlayer />
          </div>

          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
