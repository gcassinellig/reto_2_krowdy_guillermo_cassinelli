import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import type { Task } from "../../domain/types/tasks.type";
import type { FC } from "react";
import TaskListItem from "../TaskListItem";

interface TaskTableProps {
    tasks: Task[]
    onMessageTask: (task: Task) => void
}

const TaskTable: FC<TaskTableProps> = ({ tasks, onMessageTask }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Persona</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Teléfono</TableCell>
                        <TableCell>Proceso</TableCell>
                        <TableCell>Fecha de proceso</TableCell>
                        <TableCell>Ubicación</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Mensajear</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => {
                        return (
                            <TaskListItem
                                task={task}
                                key={task.id}
                                onMessage={onMessageTask}
                            />
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TaskTable