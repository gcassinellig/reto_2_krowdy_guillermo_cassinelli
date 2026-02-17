import { useState, type FC } from "react";
import type { Maybe } from "../../domain/types";
import type { Task } from "../../domain/types/tasks.type";
import { Button, Checkbox, DialogContent, DialogTitle, FormControlLabel, FormGroup } from "@mui/material";

interface SelectCanalProps {
    task?: Maybe<Task>
    onPreviousScreen: (task?: Maybe<Task>) => void
    onNextScreen: (task?: Maybe<Task>) => void
    modoSMS: number
    setModoSMS: (value: number) => void
    modoCorreo: number
    setModoCorreo: (value: number) => void
    modoWhatsapp: number
    setModoWhatsapp: (value: number) => void
}

const SelectCanal: FC<SelectCanalProps> = ({ task, onNextScreen, onPreviousScreen, modoSMS, setModoSMS, modoCorreo, setModoCorreo, modoWhatsapp, setModoWhatsapp }) => {
    const [mensajeError, setmensajeError] = useState("")
    const handleToNextScreen = () => {
        if (modoSMS === 0 && modoCorreo === 0 && modoWhatsapp === 0) {
            setmensajeError("Por favor seleccione uno o más canales")
        } else {
            onNextScreen(task)
        }
    }
    const handleToPrevScreen = () => {
        onPreviousScreen(task)
    }
    return (
        <>
            <DialogTitle>Selección de canales</DialogTitle>
            <DialogContent>
                <form>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox
                                checked={modoSMS === 1}
                                onChange={(e) => setModoSMS(e.target.checked ? 1 : 0)}
                            />}
                            label="SMS"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={modoCorreo === 1}
                                onChange={(e) => setModoCorreo(e.target.checked ? 1 : 0)}
                            />}
                            label="Correo electrónico" />
                        <FormControlLabel
                            control={<Checkbox
                                checked={modoWhatsapp === 1}
                                onChange={(e) => setModoWhatsapp(e.target.checked ? 1 : 0)}
                            />}
                            label="WhatsApp" />
                    </FormGroup>
                </form>
                <form>
                    {mensajeError}
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

export default SelectCanal