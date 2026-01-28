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
        // --- CLASES BASE ---
        "relative z-20 pointer-events-none select-none",
        "w-[300px] md:w-[400px] lg:w-[600px]",
        "opacity-60",

        // ✨ NUEVA ANIMACIÓN: "Florecer Suave" ✨
        "animate-in",         // Activa la animación
        "fade-in",            // Aparece de transparente a opaco (60%)
        "zoom-in-90",         // Empieza al 90% de su tamaño y crece al 100%
        "duration-[2000ms]",  // Muy lento (2 segundos) para que sea elegante
        "ease-out",           // Frena suavemente al final

        // --- CLASES VARIABLES ---
        className
      )}
    />
  );
}