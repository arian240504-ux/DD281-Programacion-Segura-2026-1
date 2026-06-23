export interface Lead {
    id: number;
    nombre: string;
    email: string;
    empresa?: string;
    telefono?: string;
    mensaje?: string;
    fechaRegistro: string;
}

export interface LeadRequest {
    nombre: string;
    email: string;
    empresa: string;
    telefono: string;
    mensaje: string;
}