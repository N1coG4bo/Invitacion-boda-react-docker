import { Countdown } from "@/components/Countdown";
import { FloralSection } from "@/components/FloralSection";
import { FloralSectionTop } from "@/components/FloralSectionTop";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Utensils, Wine, Cake, Music, MapPin, Gift, Shirt, CheckCircle2, MessageCircle } from "lucide-react";

export default function Home() {
  const weddingDate = "2026-05-29T18:00:00";

  const timelineEvents = [
    { time: "4:00 PM", title: "Ceremonia", icon: CheckCircle2 }, // Icono genérico, idealmente anillos
    { time: "5:00 PM", title: "Fotografía", icon: Camera },
    { time: "6:00 PM", title: "Cocktail", icon: Wine },
    { time: "7:00 PM", title: "Cena", icon: Utensils },
    { time: "8:00 PM", title: "Torta", icon: Cake },
    { time: "9:00 PM", title: "Fiesta", icon: Music },
  ];

  // --- SOLUCIÓN FINAL: API DIRECTA + ASCII ---
  // 1. Usamos 'api.whatsapp.com' en lugar de 'wa.me' para evitar redirecciones que rompen emojis.
  // 2. El texto es 100% código seguro. No hay tildes ni emojis visuales aquí.

  // MENSAJE NICO: "¡Hola Nico! Confirmo mi asistencia a su matrimonio. ¡Nos vemos allá! 💍🤵🏻‍♂️🎉"
  // Nota: Usamos tus números reales que venían en el código anterior.
  const linkNico = "https://api.whatsapp.com/send?phone=56950781737&text=%C2%A1Hola%20Nico!%20Confirmo%20mi%20asistencia%20a%20su%20matrimonio.%20%C2%A1Nos%20vemos%20all%C3%A1!%20%F0%9F%92%8D%F0%9F%A4%B5%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%8E%89";

  // MENSAJE CARLI: "¡Hola Carli! Confirmo mi asistencia a su matrimonio. ¡Qué emoción! 💍👰🏻‍♀️🥂"
  const linkCarli = "https://api.whatsapp.com/send?phone=56965294656&text=%C2%A1Hola%20Carli!%20Confirmo%20mi%20asistencia%20a%20su%20matrimonio.%20%C2%A1Qu%C3%A9%20emoci%C3%B3n!%20%F0%9F%92%8D%F0%9F%91%B0%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%A5%82";


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <FloralSectionTop>
        <div className="space-y-16 text-center max-w-2xl mx-auto">
          <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <h2 className="text-5xl font-script text-foreground">Te invitamos a nuestra boda!</h2>
            <h1 className="text-5xl font-script text-foreground">Carli  &  Nicolás!</h1>
          </div>
        </div>
        {/* BLOQUE 1: La Imagen (Ahora ocupará la mitad en PC) */}
        <div className="w-1/2 md:w-1/2 mx-auto">
          <img
            src="/images/nico-carli-laguna.webp"
            alt="Nicolás y Carli bajo el arco floral"
            // black_70% significa: "Muestra la foto normal hasta el 70%, y luego desvanece"
            className="w-full h-auto drop-shadow-xl [mask-image:linear-gradient(black_70%,transparent)] opacity-75 opacity-60 hover:opacity-100 transition-opacity duration-600"
          />
        </div>
      </FloralSectionTop>




      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 pb-12 px-4 text-center lg:text-left lg:px-20 gap-8 lg:gap-16">


        {/* BLOQUE 2: El Texto y Reproductor (La otra mitad) */}
        <div className="space-y-6 max-w-lg mx-auto lg:mx-0 lg:w-1/2 z-10 flex flex-col items-center lg:items-center">
          {/* ^^^ MAGIA 3: lg:items-start (alinea elementos a la izquierda en PC) */}

          <div className="w-full max-w-xs"> {/* Contenedor para limitar ancho del player */}
            <MusicPlayer />
          </div>

          <div className="space-y-2 mt-8 w-full">
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide text-center">
              Te invitamos a celebrar nuestro matrimonio el día
            </p>

            {/* Fecha: En PC la mantenemos centrada respecto a sí misma o la alineamos izquierda según gusto */}
            <div className="flex flex-col items-center lg:items-center py-4">
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Mayo</span>

              {/* Caja de la fecha */}
              <div className="flex items-center gap-4 md:gap-8 border-y border-primary/30 py-4 px-8 md:px-12">
                <span className="text-sm md:text-base uppercase tracking-widest">Viernes</span>
                <span className="text-6xl md:text-7xl font-serif font-bold text-primary">29</span>
                <span className="text-sm md:text-base uppercase tracking-widest">18:00 Hrs</span>
              </div>

              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-2">2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cuenta Regresiva */}
      <FloralSection withDivider>
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Faltan</h2>
          <Countdown targetDate={weddingDate} />
        </div>
      </FloralSection>

      {/* Ubicación */}
      <FloralSection withDivider>
        <div className="space-y-16 text-center max-w-2xl mx-auto">
          {/* Recepción */}
          <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-100">
            <h2 className="text-5xl font-script text-foreground">Recepción</h2>
            <div className="space-y-1">
              <p className="text-lg font-medium">Iglesia Inmaculada Concepción 257</p>
              <p className="text-muted-foreground">Santiago a las 18:00 hrs</p>
            </div>
            <Button className="mt-4 bg-[#D4C4A8] hover:bg-[#C4B498] text-white rounded-full px-8 tracking-widest uppercase text-xs font-bold shadow-md transition-all hover:shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Ubicación
            </Button>
          </div>

          {/* Fiesta */}
          <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <h2 className="text-5xl font-script text-foreground">Fiesta</h2>
            <div className="space-y-1">
              <p className="text-lg font-medium">Centro de eventos Las Flores</p>
              <p className="text-muted-foreground">Santiago a las 19:00 hrs</p>
            </div>
            <Button className="mt-4 bg-[#D4C4A8] hover:bg-[#C4B498] text-white rounded-full px-8 tracking-widest uppercase text-xs font-bold shadow-md transition-all hover:shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Ubicación
            </Button>
          </div>
        </div>
      </FloralSection>

      {/* Itinerario */}
      <FloralSection withDivider>
        <h2 className="text-4xl font-serif text-center mb-12">Itinerario</h2>
        <Timeline events={timelineEvents} />
      </FloralSection>

      {/* Confirmación */}
      <FloralSection>
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-5xl font-script mb-4">Confirmación de asistencia</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tu presencia es muy importante. Confirma tu asistencia enviándonos un mensaje directo por WhatsApp a cualquiera de los dos.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6">

            {/* Botón 1: Confirmar con Nicolás */}
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto">
              <a
                href={linkNico} // <--- Aquí usamos la variable segura
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-base font-bold tracking-wide"
              >
                <MessageCircle className="w-6 h-6" />
                Confirmar con Nicolás
              </a>
            </Button>

            {/* Botón 2: Confirmar con Carli */}
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto">
              <a
                href={linkCarli} // <--- Aquí usamos la variable segura
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-base font-bold tracking-wide"
              >
                <MessageCircle className="w-6 h-6" />
                Confirmar con Carli
              </a>
            </Button>

          </div>

          <p className="text-sm text-muted-foreground italic mt-4">
            (Al hacer clic se abrirá tu WhatsApp con el mensaje listo)
          </p>
        </div>
      </FloralSection>

      {/* Dress Code */}
      <FloralSection>
        <div className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="text-5xl font-script mb-8">Dress code</h2>
          <div className="flex justify-center mb-6">
            <Shirt className="w-16 h-16 text-primary opacity-80" strokeWidth={1} />
          </div>
          <p className="text-lg text-muted-foreground">
            Todos los tonos son bienvenidos, excepto el blanco, reservado para los novios.
          </p>
        </div>
      </FloralSection>

      {/* Regalo */}
      <FloralSection withDivider>
        <div className="text-center max-w-xl mx-auto space-y-8">
          <h2 className="text-5xl font-script">Regalo</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tu presencia ya es un regalo, pero si quieres ayudarnos a comenzar esta nueva etapa, puedes hacerlo por transferencia.
          </p>

          <Card className="border-none shadow-lg backdrop-blur">
            <CardContent className="p-8 space-y-4 text-left md:text-center">
              <h3 className="text-xl font-serif font-bold text-center mb-6 tracking-widest uppercase border-b pb-4">Datos de Transferencia</h3>
              <div className="space-y-2 text-sm md:text-base font-mono text-muted-foreground">
                <p><strong className="text-foreground">NOMBRE:</strong> Nicolás Lagos</p>
                <p><strong className="text-foreground">RUT:</strong> 12.345.678-9</p>
                <p><strong className="text-foreground">CUENTA:</strong> Vista</p>
                <p><strong className="text-foreground">BANCO:</strong> Banco de Chile</p>
                <p><strong className="text-foreground">MAIL:</strong> novios@ejemplo.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </FloralSection>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p className="font-serif italic">Con amor, Nicolás & Carli</p>
        <p className="mt-2 text-xs opacity-50">29 . 05 . 2026</p>
      </footer>
    </div>
  );
}
