import { FloralSectionTop } from '@/components/FloralSectionTop';
import { Enredadera } from '@/components/flowers/Enredadera';
import { RamoFlores } from '@/components/flowers/RamosFlores'; // Asumo la ruta
import React from 'react';
import { useLocation } from "wouter";
import { MusicPlayer } from '@/components/MusicPlayer'; 

export default function Sobre() {
    const [, setLocation] = useLocation();

    const abrirInvitacion = () => {
        setLocation("/invitacion"); 
    };

    return (


        // CONTENEDOR PRINCIPAL
        // Añadimos 'overflow-hidden' para que si las flores son muy grandes no generen scroll
        <div className="min-h-screen bg-background overflow-hidden relative w-full h-full">

            {/* --- CAPA 1: DECORACIÓN (Absolute) --- */}
            {/* Las sacamos del flujo flex. Así siempre estarán "en su sitio" sin depender del texto */}
            
            {/* Ejemplo: Flores arriba (Opcional, si usas FloralSectionTop) */}
            {/* <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
                <FloralSectionTop />
            </div> */}




            {/* --- CAPA 2: CONTENIDO PRINCIPAL (Flex) --- */}
            {/* Este div ocupa toda la pantalla y centra el contenido ENCIMA de las flores */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-start p-4 pb-20"> 
                {/* pb-20 (Padding Bottom) extra para que el texto no choque con las flores del fondo */}

                {/* 1. TEXTO SUPERIOR */}
                <div className="text-center space-y-2 mb-6 animate-in fade-in slide-in-from-top-8 duration-1000 delay-200 fill-mode-forwards">
                    <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest uppercase">
                        Tienes una
                    </p>
                    <h1 className="text-4xl md:text-6xl font-script text-foreground drop-shadow-sm">
                        Invitación Especial
                    </h1>

                    <h1 className="text-2xl md:text-4xl font-script text-foreground drop-shadow-sm">
                        Carla Pizarro & Nicolás Lagos
                    </h1>
                    
                </div>

                {/* 2. EL SOBRE */}
                <div 
                    className="relative w-full max-w-[500px] flex justify-center cursor-pointer group" 
                    onClick={abrirInvitacion}
                >
                    <img
                        src="/images/sobre.png"
                        alt="Sobre Invitación"
                        loading="eager"
                        fetchPriority="high"
                        className="
                        relative z-20 w-full object-contain drop-shadow-2xl
                        animate-in fade-in slide-in-from-bottom-24 duration-[2000ms] ease-out
                        transition-transform duration-500 ease-in-out
                        group-hover:-translate-y-4 group-hover:scale-105
                        "
                    />
                </div>

                {/* 3. TEXTO INFERIOR */}
                {/* Quité el 'mb-8' que tenías, porque empujaba todo hacia arriba innecesariamente */}
                <div className="mt-6 text-center space-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                    <p className="text-sm md:text-base text-muted-foreground/80 pt-2 animate-pulse">
                        (Toca el sobre para abrir)
                    </p>
                </div>

                {/* REPRODUCTOR DE MÚSICA */}
                <div className="w-full max-w-xs md:max-w-md transition-all duration-300 mt-5"> 
                    {/* ^^^ En notebook (md) lo dejamos crecer a 'max-w-md' para que no se vea enano */}
                    <MusicPlayer />
                </div>

            </div>
        </div>
       
    );
}