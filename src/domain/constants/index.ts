import { keyBy } from "es-toolkit"
import type { Task } from "../types/tasks.type"

export const TaskStatus = {
    PENDING: 'PENDING',
    DOING: 'DOING',
    DONE: 'DONE'
}

const TaskStatusConfigs = [
    {
        status: TaskStatus.PENDING,
        color: 'red',
        label: 'Pendiente'
    },
    {
        status: TaskStatus.DOING,
        color: 'orange',
        label: 'En progreso'
    },
    {
        status: TaskStatus.DONE,
        color: 'green',
        label: 'Finalizado'
    }
]

export const taskStatusConfigBy = keyBy(
    TaskStatusConfigs, ({ status }) => status
)

export const tasksDefault: Task[] = [
    {
        id: 1,
        description: 'Joaquin Salazar',
        correo: 'joaquinsalazar@gmail.com',
        telefono: 963852741,
        cratedAt: new Date(),
        proceso: 'Entrevista de trabajo',
        procesodate: new Date(),
        ubicacion: 'Presencial',
        status: TaskStatus.PENDING,
    },
    {
        id: 2,
        description: 'Marta Gomez',
        correo: 'martagomez@gmail.com',
        telefono: 951627843,
        cratedAt: new Date(),
        proceso: 'Entrevista de trabajo',
        procesodate: new Date(),
        ubicacion: 'Virtual',
        status: TaskStatus.PENDING,
    },
    {
        id: 3,
        description: 'Eduardo Reyes',
        correo: 'edureyes@gmail.com',
        telefono: 942753861,
        cratedAt: new Date(),
        proceso: 'Entrevista de trabajo',
        procesodate: new Date(),
        ubicacion: 'Presencial',
        status: TaskStatus.PENDING,
    }
]