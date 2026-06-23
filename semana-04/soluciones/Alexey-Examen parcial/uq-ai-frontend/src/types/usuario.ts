export interface Usuario {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    rol: "ADMIN" | "USER";
    area: string;
}

export interface AuthResponse {
    token: string;
    rol: "ADMIN" | "USER";
    mensaje: string;
}