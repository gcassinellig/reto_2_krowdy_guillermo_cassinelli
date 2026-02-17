import { useState } from "react";
import { tasksDefault } from "./domain/constants";
import type { Task } from "./domain/types/tasks.type";
import TaskTable from "./components/TaskTable";
import type { Maybe } from "./domain/types";
import { Dialog } from "@mui/material";
import TaskForm from "./components/TaskForm";

interface DialogState {
  open: boolean;
  task?: Maybe<Task>
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksDefault)
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    task: null
  })

  const handleCloseDialog = () => {
    setDialogState({
      task: null,
      open: false
    })
  }

  const handleClickOpenDialog = (task?: Task) => {
    setDialogState({
      task,
      open: true
    })
  }

  const handleMessageTask = (task: Task) => {
    handleClickOpenDialog(task)
  }

  return (
    <>
      <TaskTable tasks={tasks} onMessageTask={handleMessageTask} />
      <Dialog open={dialogState.open} onClose={handleCloseDialog}>
        <TaskForm task={dialogState.task} onCloseTask={handleCloseDialog} />
      </Dialog>
    </>
  )
}

export default App
