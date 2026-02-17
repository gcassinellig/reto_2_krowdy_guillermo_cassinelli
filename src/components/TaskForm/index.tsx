import type { Maybe } from "../../domain/types";
import type { Task } from "../../domain/types/tasks.type";
import { useState, type FC } from "react";
import SelectPlantilla from "../TaskScreens/selectPlantilla";
import SelectCanal from "../TaskScreens/selectCanal";
import EnviarSMS from "../TaskScreens/enviarSMS";
import EnviarCorreo from "../TaskScreens/enviarCorreo";
import EnviarWhatsapp from "../TaskScreens/enviarWhatsApp";

interface TaskFormProps {
    task?: Maybe<Task>
    onCloseTask: (task?: Maybe<Task>) => void
}

const TaskForm: FC<TaskFormProps> = ({ task, onCloseTask }) => {
    const [modoMensaje, setmodoMensaje] = useState("")
    const [modoSMS, setModoSMS] = useState(0)
    const [modoCorreo, setModoCorreo] = useState(0)
    const [modoWhatsapp, setModoWhatsapp] = useState(0)
    const [screennumero, setscreennumero] = useState(1)
    const handleMessageClosing = () => {
        onCloseTask(task)
    }
    const handleNextScreen = () => {
        setscreennumero(prev => prev + 1)
    }
    const handlePreviousScreen = () => {
        setscreennumero(prev => prev - 1)
    }
    return (
        <>
            {screennumero === 1 && (
                <SelectPlantilla task={task} onCloseTask={handleMessageClosing} onNextScreen={handleNextScreen} modoVariable={modoMensaje} setModoVariable={setmodoMensaje} />
            )}
            {screennumero === 2 && (
                <SelectCanal
                    task={task}
                    onPreviousScreen={handlePreviousScreen}
                    onNextScreen={handleNextScreen}
                    modoSMS={modoSMS} setModoSMS={setModoSMS}
                    modoCorreo={modoCorreo} setModoCorreo={setModoCorreo}
                    modoWhatsapp={modoWhatsapp} setModoWhatsapp={setModoWhatsapp}
                />
            )}
            {screennumero === 3 && (
                <EnviarSMS task={task} onPreviousScreen={handlePreviousScreen} onNextScreen={handleNextScreen} />
            )}
            {screennumero === 4 && (
                <EnviarCorreo task={task} onPreviousScreen={handlePreviousScreen} onNextScreen={handleNextScreen} />
            )}
            {screennumero === 5 && (
                <EnviarWhatsapp task={task} onPreviousScreen={handlePreviousScreen} onNextScreen={handleNextScreen} />
            )}


        </>
    )
}

export default TaskForm