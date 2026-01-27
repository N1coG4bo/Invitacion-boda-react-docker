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


            {/* --- banner --- */}
      <img
        src="/images/banner-25-01-canva.webp" // Usamos la imagen curva
        alt="Decoración floral esquina superior izquierda"
        // EXPLICACIÓN DE CLASES CLAVE:
        // absolute top-0 left-0: Posición fija en la esquina superior izquierda.
        // w-2/3 md:w-5/12: Tamaño relativo. 2/3 del ancho en celular, un poco menos de la mitad en PC.
        // rotate-45: La rotación solicitada.
        // translate-x-[20%] -translate-y-[35%]: Estos valores "empujan" la imagen hacia afuera.
        // Juega con estos porcentajes si quieres que se meta más o menos en la pantalla.
        className="
    absolute 
    z-20
    
    /* 1. EL TAMAÑO (Contrólalo aquí sin miedo) */
    w-[395px] md:w-[800px] lg:w-[600px] max-w-none max-md:none

    /* 2. LA POSICIÓN (Usa píxeles exactos desde la esquina) */
    /* top-[-50px]: La sube 50px hacia afuera del techo */
    /* right-[-20px]: La mueve 20px hacia la derecha afuera de la pantalla */
    top-[-3px] 
    left-1/2 -translate-x-1/2

    /* 3. LA ROTACIÓN */
    rotate-[0deg] 
    
    /* 4. UTILIDADES */
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
