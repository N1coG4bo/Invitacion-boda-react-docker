package com.boda.backend.controller;

import com.boda.backend.model.Invitado;
import com.boda.backend.repository.InvitadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // ¡VITAL! Permite que React se conecte sin errores de CORS
public class RsvpController {

    @Autowired
    private InvitadoRepository invitadoRepository;

    // Endpoint: POST /api/rsvp
    // Recibe: { "nombre": "Tía Juanita", "asiste": true, "alergias": "Ninguna" }
    @PostMapping("/rsvp")
    public ResponseEntity<String> confirmarAsistencia(@RequestBody Invitado nuevoInvitado) {
        try {
            invitadoRepository.save(nuevoInvitado);
            return ResponseEntity.ok("¡Gracias por confirmar tu asistencia!");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error al guardar: " + e.getMessage());
        }
    }

    // Endpoint: GET /api/invitados
    // Úsalo tú para ver quién ha confirmado entrando a https://tu-web.com/api/invitados
    @GetMapping("/invitados")
    public Iterable<Invitado> verLista() {
        return invitadoRepository.findAll();
    }
}