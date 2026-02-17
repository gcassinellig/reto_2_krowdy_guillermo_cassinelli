import { useState, type FC } from "react"
import type { Maybe } from "../../domain/types"
import type { Task } from "../../domain/types/tasks.type"
import { Button, DialogContent, DialogTitle, TextField } from "@mui/material"

interface EnviarCorreoProps {
    task?: Maybe<Task>
    onPreviousScreen: (task?: Maybe<Task>) => void
    onNextScreen: (task?: Maybe<Task>) => void
}

const EnviarCorreo: FC<EnviarCorreoProps> = ({ task, onPreviousScreen, onNextScreen }) => {
    const [mensajeError, setmensajeError] = useState("")
    const handleToPrevScreen = () => {
        onPreviousScreen(task)
    }
    const handleToNextScreen = () => {
        onNextScreen(task)

    }
    return (
        <>
            <DialogTitle>Correo electrónico</DialogTitle>
            <DialogContent>
                Mensaje
                <form>
                    <TextField value={''} />
                </form>
                <Button type="submit" variant="contained" color="primary" onClick={handleToPrevScreen}>
                    Atrás
                </Button>
                <Button type="submit" variant="contained" color="secondary" onClick={handleToNextScreen}>
                    Siguiente
                </Button>
            </DialogContent>
        </>
    )
}

export default EnviarCorreo