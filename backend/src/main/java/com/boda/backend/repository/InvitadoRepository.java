package com.boda.backend.repository;

import com.boda.backend.model.Invitado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvitadoRepository extends JpaRepository<Invitado, Long> {
    // Aquí podrías agregar búsquedas personalizadas en el futuro si quieres
    // Ejemplo: List<Invitado> findByAsisteTrue();
}