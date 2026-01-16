package com.boda.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data // Lombok genera Getters, Setters, ToString, etc. automático
@Table(name = "invitados")
public class Invitado {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    // Opcional: Para contactarlo si es necesario
    private String telefono;
    
    // true = va a la boda, false = no puede ir
    private boolean asiste;
    
    // "Ninguna", "Vegano", "Alergia al maní"
    private String alergias; 
    
    @Column(name = "fecha_confirmacion")
    private LocalDateTime fechaConfirmacion = LocalDateTime.now();
}