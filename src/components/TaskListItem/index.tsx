import { type FC } from "react"
import type { Task } from "../../domain/types/tasks.type"
import { taskStatusConfigBy } from "../../domain/constants"
import { Button, IconButton, TableCell, TableRow } from "@mui/material"
import { Message as MessageIcon } from '@mui/icons-material'

interface TaskListItemProps {
    task: Task
    onMessage: (task: Task) => void
}

const TaskListItem: FC<TaskListItemProps> = ({ task, onMessage }) => {
    const taskStatusConfig = taskStatusConfigBy[task.status]
    const handleClickMessage = () => {
        onMessage(task)
    }
    return (
        <TableRow
            key={task.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {task.description}
            </TableCell>
            <TableCell>{task.correo}</TableCell>
            <TableCell>+51 {task.telefono}</TableCell>
            <TableCell>{task.proceso}</TableCell>
            <TableCell>{task.procesodate.toISOString()}</TableCell>
            <TableCell>{task.ubicacion}</TableCell>
            <TableCell>
                <Button sx={{
                    color: 'white',
                    backgroundColor: taskStatusConfig.color
                }}>
                    {taskStatusConfig.label}
                </Button>
            </TableCell>
            <TableCell>
                <IconButton onClick={handleClickMessage}>
                    <MessageIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default TaskListItem