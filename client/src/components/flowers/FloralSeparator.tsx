import { cn } from "@/lib/utils";

interface FloralSeparatorProps {
  className?: string; // Para inyectar márgenes personalizados desde fuera
}

export function FloralSeparator({ className }: FloralSeparatorProps) {
  return (
    <img
      src="/images/separador-flores.PNG"
      alt="Decoración floral separadora"
      className={cn(
        // --- CLASES BASE (Lo que siempre es igual) ---
        "relative z-20 pointer-events-none select-none",
        // Tamaño base responsivo
        "w-[300px] md:w-[400px] lg:w-[600px]", 
        // Estilo base
        "opacity-60",
        
        // --- CLASES VARIABLES (Aquí se aplican tus ajustes manuales) ---
        className
      )}
    />
  );
}