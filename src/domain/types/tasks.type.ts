import type { Maybe } from ".";

export interface Task {
    id: number;
    description: string;
    correo: string;
    telefono: number;
    cratedAt: Date;
    proceso: string;
    procesodate: Date;
    ubicacion: string;
    status: string;
}

export interface TaskInput {
    id?: Maybe<number>
    description: string;
}