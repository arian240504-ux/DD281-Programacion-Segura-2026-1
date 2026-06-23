package com.uqai.service;

import com.uqai.dto.response.AuthResponse;
import com.uqai.dto.request.LoginRequest;
import com.uqai.dto.request.RegisterRequest;
import com.uqai.entity.Rol;
import com.uqai.entity.Usuario;
import com.uqai.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {

        if (usuarioRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("El correo ya existe");
        }

        Usuario usuario = Usuario.builder()
                .nombre(request.getNombre())
                .apellidos(request.getApellidos())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .area(request.getArea())
                .rol(Rol.USER)
                .build();

        usuarioRepository.save(usuario);

        String token = jwtService.generateToken(usuario.getEmail());

        return new AuthResponse(
                token,
                usuario.getRol().name(),
                "Usuario registrado correctamente"
        );
    }

    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        Usuario usuario = usuarioRepository
                .findByEmail(request.getEmail())
                .orElseThrow();

        String token = jwtService.generateToken(usuario.getEmail());

        return new AuthResponse(
                token,
                usuario.getRol().name(),
                "Login exitoso"
        );
    }
}