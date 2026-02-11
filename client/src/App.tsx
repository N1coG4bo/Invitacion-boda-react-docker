import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
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
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          
          {/* 2. REPRODUCTOR GLOBAL: 
             Lo colocamos aquí, fijo en la pantalla y fuera del Router.
             z-50 asegura que esté por encima de todo (incluso de las flores).
          */}
          <div className="w-[50%] fixed bottom-0 z-50 justify-center">
            <MusicPlayer />
          </div>

          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
