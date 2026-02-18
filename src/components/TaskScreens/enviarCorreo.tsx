import { useEffect, useState, type FC } from "react"
import type { Maybe } from "../../domain/types"
import type { Task } from "../../domain/types/tasks.type"
import { Button, DialogContent, DialogTitle, TextField } from "@mui/material"

interface EnviarCorreoProps {
    task?: Maybe<Task>
    onPreviousScreen: (task?: Maybe<Task>) => void
    onNextScreen: (task?: Maybe<Task>) => void
    modoVariable: string
}

const EnviarCorreo: FC<EnviarCorreoProps> = ({ task, onPreviousScreen, onNextScreen, modoVariable }) => {
    const [mensajeError, setmensajeError] = useState("")
    const [textoInicial, setTextoInicial] = useState("")

    useEffect(() => {
        switch (modoVariable) {
            case "invitar":
                setTextoInicial("Hola " + [task?.description] + ", te invitamos a participar en el proceso de " + [task?.proceso] + " que se llevará a cabo el " + [task?.procesodate.toISOString()] + ". Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!");
                break;
            case "recordar":
                setTextoInicial("Hola " + [task?.description] + ", te recordamos que el proceso de " + [task?.proceso] + " al que confirmaste tu asistencia se realizará el " + [task?.procesodate.toISOString()] + ". ¡Te esperamos puntual!");
                break;
            default:
                setTextoInicial("");
        }
    }, [modoVariable]);

    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => setTextoInicial(value)

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
                Asunto
                <form>
                    <TextField value={''} placeholder="Escribe asunto" />
                </form>
                Mensaje
                <form>
                    <TextField
                        value={textoInicial}
                        onChange={handleChange}
                        placeholder="Escribe mensaje"
                    />
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