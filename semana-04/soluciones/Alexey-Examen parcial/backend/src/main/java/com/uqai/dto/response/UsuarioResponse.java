package com.uqai.dto.response;

import com.uqai.entity.Usuario;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioResponse {

    private Long id;
    private String nombre;
    private String apellidos;
    private String email;
    private String rol;
    private String area;
    public static UsuarioResponse from(Usuario usuario) {
        return UsuarioResponse.builder()
                .id(usuario.getId())
                .nombre(usuario.getNombre())
                .apellidos(usuario.getApellidos())
                .email(usuario.getEmail())
                .rol(usuario.getRol().name())
                .area(usuario.getArea())
                .build();
    }
}