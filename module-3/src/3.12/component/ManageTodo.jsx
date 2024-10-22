/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import { initialTasks } from "../data/data";
import AddTodo from './AddTodo';
import TodoList from "./TodoList";
import { getNextId } from "../utils/nextId";
import taskReducer from "../reducer/taskReducer";


const ManageTodo = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);



    /********************************
     * handlers
     ********************************/
    const handleAddTask = (text) => {
        dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: "changed",
            task
        })
    }


    const handleDeleteTask = (id) => {
        dispatch({
            type: "deleted",
            id
        })
    }
    return (
        <>
            <div>
                <h2>TODO</h2> <hr />
                <AddTodo onAdd={handleAddTask} />
                <br />
                <div className="todo-box">
                    {
                        tasks?.map(task => <TodoList
                            key={task?.id}
                            todo={task}
                            onChangeTask={handleChangeTask}
                            onDelete={handleDeleteTask}
                        />)
                    }
                </div>
            </div>
        </>
    )
}

export default ManageTodo
