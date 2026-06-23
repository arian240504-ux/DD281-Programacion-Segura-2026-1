package com.uqai.dto.response;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String token;
    private String rol;
    private String mensaje;
}