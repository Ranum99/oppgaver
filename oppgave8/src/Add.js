import { useState } from 'react';

export const Add = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [result, setResult] = useState(0);

    const handleChangeX = (evt) => {
        setX(evt.currentTarget.value)
    }
    const handleChangeY = (evt) => {
        setY(evt.currentTarget.value)
    }
    const addNumbers = () => {
        setResult( x + y )
    }
    
    return (
        <div>
            <p>Result is: {result}</p>
            <label>First number:
                <input type="number" value={x} onChange={handleChangeX}></input>
            </label>
            <label>Second number:
                <input type="number" value={y} onChange={handleChangeY}></input>
            </label>
            <button type="button" onClick={addNumbers}>Add</button>
        </div>
    )
}