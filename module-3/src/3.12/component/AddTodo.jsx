/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTodo = ({ onAdd }) => {
    const [value, setValue] = useState('');
    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
            />
            <button onClick={() => onAdd(value)}>Add</button>
        </div>
    )
}

export default AddTodo;
