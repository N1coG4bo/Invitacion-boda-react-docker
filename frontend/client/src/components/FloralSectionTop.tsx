import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloralSectionProps {
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
}

export function FloralSectionTop({ children, className, withDivider = false }: FloralSectionProps) {
  return (
    <section className={cn(
// 1. ESTRUCTURA:
      // min-h-[85dvh]: Ocupa el 85% de la pantalla del celular SIEMPRE.
      // Esto empuja la playlist hacia abajo inmediatamente.
      "relative pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col justify-center", className
    )}>


  <img
        src="/images/banner-25-01-canva.webp"
        alt="Decoración floral esquina superior izquierda"
        className="
          /* 📱 1. MÓVIL (SAGRADO - NO TOCAR) */
          absolute z-20
          top-[-3px] 
          left-1/2 -translate-x-1/2
          w-[395px] max-w-none
          
          /* 💻 2. PC / NOTEBOOK (SOLUCIÓN DEL CORTE) */
          md:relative 
          md:left-auto md:translate-x-0
          
          /* Aumentamos la altura del contenedor */
          md:w-full 
          md:h-[500px]
          md:object-cover

          /* 🔥 EL TRUCO DEL ZOOM: */
          md:scale-[1.25] 
          md:origin-top

          /* AJUSTE VERTICAL */
          md:-mt-[100px]
          
          /* IMÁN INFERIOR */
          md:-mb-[300px]

          opacity-100 pointer-events-none select-none

          /* ✨ NUEVA ANIMACIÓN: CAÍDA DESDE ARRIBA ✨ */
          animate-in 
          slide-in-from-top-10  /* Empieza arriba y baja suavemente */
          fade-in               /* Aparece progresivamente */
          duration-[1500ms]     /* Tarda 1.5 segundos en bajar */
          ease-out              /* Frena suavemente al llegar */
        "
        /* AGREGAR ESTO AL BANNER PARA QUE CARGUE RÁPIDO: */
         loading="eager"
         fetchPriority="high"
      />


      <div className="container relative z-10">
        {children}
      </div>

      {withDivider && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <img src="/images/floral-divider.png" alt="Divider" className="w-full opacity-60" />
        </div>
      )}
    </section>
  );


}
