import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloralSectionProps {
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
}

export function FloralSection({ children, className, withDivider = false }: FloralSectionProps) {
  return ( 
    // <section className={cn("relative py-16 md:py-24 overflow-hidden", className)}>
    //   {/* Decoraciones florales en las esquinas (usando CSS o imágenes) */}
    //   <img 
    //     src="/images/arco_floral_transparente_v14.png" 
    //     alt="Floral decoration" 
    //     className="absolute top-0 left-0 w-32 md:w-48 -translate-x-1/4 -translate-y-1/4 opacity-80 "
    //   />

    //   {/* --- NUEVA IMAGEN ESQUINADA ARRIBA A LA DERECHA --- */}
    //   <img 
    //     src="/images/arco-floral-curvo-adobe.png" // Usamos la imagen curva
    //     alt="Decoración floral esquina superior derecha"
    //     // EXPLICACIÓN DE CLASES CLAVE:
    //     // absolute top-0 right-0: Posición fija en la esquina superior derecha.
    //     // w-2/3 md:w-5/12: Tamaño relativo. 2/3 del ancho en celular, un poco menos de la mitad en PC.
    //     // rotate-45: La rotación solicitada.
    //     // translate-x-[20%] -translate-y-[35%]: Estos valores "empujan" la imagen hacia afuera.
    //     // Juega con estos porcentajes si quieres que se meta más o menos en la pantalla.
    //     className="absolute top-0 right-0 w-2/3 md:w-3/12 transform translate-x-[20%] -translate-y-[0%] rotate-45 opacity-90 pointer-events-none select-none z-0Origin-center"
    //   />
      
    //       {/* --- NUEVA IMAGEN RECTAS --- */}
    //   <img 
    //     src="/images/arco-floral-transparente-recto.png" // Usamos la imagen curva
    //     alt="Decoración floral de los bordes"
    //     // EXPLICACIÓN DE CLASES CLAVE:
    //     // absolute top-0 right-0: Posición fija en la esquina superior derecha.
    //     // w-2/3 md:w-5/12: Tamaño relativo. 2/3 del ancho en celular, un poco menos de la mitad en PC.
    //     // rotate-45: La rotación solicitada.
    //     // translate-x-[20%] -translate-y-[35%]: Estos valores "empujan" la imagen hacia afuera.
    //     // Juega con estos porcentajes si quieres que se meta más o menos en la pantalla.
    //     className="left-1/2 absolute top-0 w-2/3 md:w-3/12 transform translate-x-[0%] -translate-y-[0%] rotate-0 opacity-90 pointer-events-none select-none z-0Origin-center"
    //   />


    //   <img 
    //     src="/images/floral-corner-2.png" 
    //     alt="Floral decoration" 
    //     className="absolute bottom-0 right-0 w-32 md:w-48 translate-x-1/4 translate-y-1/4 rotate-180 opacity-80"
    //   />

    //   <div className="container relative z-10">
    //     {children}
    //   </div>

    //   {withDivider && (
    //     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
    //       <img src="/images/floral-divider.png" alt="Divider" className="w-full opacity-60" />
    //     </div>
    //   )}
    // </section> 
  <div>
    {children}
  </div>
        );


}
