import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloralSectionProps {
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
}

export function FloralSection({ children, className, withDivider = false }: FloralSectionProps) {
  return (
    <section className={cn("relative py-16 md:py-24 overflow-hidden", className)}>
      {/* Decoraciones florales en las esquinas (usando CSS o imágenes) */}
      <img 
        src="/images/floral-corner-1.png" 
        alt="Floral decoration" 
        className="absolute top-0 left-0 w-32 md:w-48 -translate-x-1/4 -translate-y-1/4 opacity-80"
      />
      <img 
        src="/images/floral-corner-2.png" 
        alt="Floral decoration" 
        className="absolute bottom-0 right-0 w-32 md:w-48 translate-x-1/4 translate-y-1/4 rotate-180 opacity-80"
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
