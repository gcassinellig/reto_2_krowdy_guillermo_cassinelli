import { Button, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState, type FC } from "react"
import type { Task } from "../../domain/types/tasks.type"
import type { Maybe } from "../../domain/types"

interface SelectPlantillaProps {
    task?: Maybe<Task>
    onCloseTask: (task?: Maybe<Task>) => void
    onNextScreen: (task?: Maybe<Task>) => void
    modoVariable: string
    setModoVariable: (value: string) => void
}

const SelectPlantilla: FC<SelectPlantillaProps> = ({ task, onCloseTask, onNextScreen, modoVariable, setModoVariable }) => {
    const [mensajeError, setmensajeError] = useState("")
    const handleMessageClosing = () => {
        onCloseTask(task)
    }
    const handleToNextScreen = () => {
        if (modoVariable === "") {
            setmensajeError("Por favor seleccione una plantilla")
        } else {
            onNextScreen(task)
        }

    }
    return (
        <>
            <DialogTitle>Selección de plantilla</DialogTitle>
            <DialogContent>
                <form>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={modoVariable}
                        onChange={(e) => setModoVariable(e.target.value)}
                    >
                        <FormControlLabel
                            value="invitar"
                            control={<Radio />}
                            label="Invitación" />
                        <FormControlLabel
                            value="recordar"
                            control={<Radio />}
                            label="Recordatorio" />
                        <FormControlLabel
                            value="personalizar"
                            control={<Radio />}
                            label="Personalizado" />
                    </RadioGroup>
                </form>
                <form>
                    {mensajeError}
                </form>
                <Button type="submit" variant="contained" color="primary" onClick={handleMessageClosing}>
                    Cancelar
                </Button>
                <Button type="submit" variant="contained" color="secondary" onClick={handleToNextScreen}>
                    Siguiente
                </Button>
            </DialogContent>
        </>
    )
}

export default SelectPlantilla