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
      // --- CAMBIOS AQUÍ ---
      
      // 1. Cambiamos 'py-16' por 'pt-16 pb-0'. 
      //    (Solo relleno arriba, CERO relleno abajo).
      "relative pt-16 md:pt-24 pb-0 overflow-hidden",
      
      // 2. Cambiamos 'min-h-[700px]' por 'min-h-fit' o borramos el min-h.
      //    'min-h-fit' hace que la caja se ajuste al tamaño exacto de la foto+texto.
      "min-h-fit flex flex-col justify-center",
      
      className
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
          
          /* Aumentamos la altura del contenedor para que quepan las flores */
          md:w-full 
          md:h-[500px]
          md:object-cover

          /* 🔥 EL TRUCO DEL ZOOM: */
          /* scale-[1.25]: Agrandamos la imagen un 25% para que sobre imagen por todos lados */
          /* origin-top: Hacemos que crezca hacia abajo, manteniendo el techo fijo */
          md:scale-[1.25] 
          md:origin-top

          /* AJUSTE VERTICAL */
          /* Subimos la imagen lo suficiente para esconder el borde recto de arriba */
          md:-mt-[100px]
          
          /* IMÁN INFERIOR */
          /* Esto acerca el corazón de abajo. */
          /* Si el corazón queda muy lejos, aumenta este número (ej: -350px) */
          md:-mb-[300px]

          opacity-100 pointer-events-none select-none
        "
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
