import {BoardState, Column, Task} from "@/app/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const boardInitialState: BoardState = {
    columns: [{
        id: 'todo',
        title: 'To Do',
        columnType: 'default',
        taskIds: [],
    },
        {
            id: 'inprogress',
            title: 'In Progress',
            columnType: 'default',
            taskIds: [],
        },
        {
            id: 'done',
            title: 'Done',
            columnType: 'default',
            taskIds: [],
        },],
    tasks: {}
}
export const boardSlice = createSlice({
    name: 'board',
    initialState: boardInitialState,
    reducers: {
        addTask: (state, action:PayloadAction<{ columnId: string; task: Task }>) => {
            const { columnId, task } = action.payload
            state.tasks[task.id] = task
            const column = state.columns.find((column: Column) => column.id === columnId)
            if (column) {
                column.taskIds.push(task.id)
            }
        },
        editTask:(state, action: PayloadAction<{ taskId: string; title: string }>) => {
            const { taskId, title } = action.payload
            const task = state.tasks[taskId]
            if (task) {
                task.title = title
            }
        },
        deleteTask: (state, action: PayloadAction<{ taskId: string; columnId: string }>)  => {
            const { taskId, columnId } = action.payload
            const column = state.columns.find((column: Column) => column.id === columnId)
            if (column) {
                column.taskIds = column.taskIds.filter((id: string) => id !== taskId)
            }
            delete state.tasks[taskId]
        },
        moveTask: (state, action:PayloadAction<{
            sourceColumnId: string
            destinationColumnId: string
            destinationIndex: number
            taskId: string
        }>) => {
            const { sourceColumnId, destinationColumnId, destinationIndex, taskId } = action.payload
            const sourceColumn = state.columns.find((column: Column) => column.id === sourceColumnId)
            const destinationColumn = state.columns.find((column: Column) => column.id === destinationColumnId)
            if (!sourceColumn || !destinationColumn) return
            const task = state.tasks[taskId]
            if (task) {
                sourceColumn.taskIds = sourceColumn.taskIds.filter((id: string) => id !== taskId)
                destinationColumn.taskIds.splice(destinationIndex, 0, taskId)
            }
            }
    }
})

export const { addTask, editTask, deleteTask, moveTask } = boardSlice.actions
export default boardSlice.reducer
