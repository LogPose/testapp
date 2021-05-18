import React, { useState } from 'react'
import '../AddTodo/AddTodoStyle.css'

function AddTodo(props) {

    const [eventType, setEventType] = useState('null')
    const [visible, setVisible] = useState(0)

    let additionalFields = () => {
        if (eventType === 'holiday') {
            return (
                <div><input type="text" ></input></div>
            )
        } else if (eventType === 'event') {
            return (
                <div>
                    <input type="text" ></input>
                    <input type="text" ></input>
                </div>
            )
        } else if (eventType === 'note') {
            return (
                <div><input type="text" ></input></div>
            )
        }
    }

    const addTodo = props.addTodo

    let addTodoBody = () => {
        if (visible === 1) {
            return (
                <div className="add-todo">
                    <input type="text"></input>
                    <br></br>
                    <button onClick={() => setEventType('holiday')}>Праздник</button>
                    <button onClick={() => setEventType('event')}>Мероприятие</button> 
                    <button onClick={() => setEventType('note')}>Заметка</button>
                    <br></br>
                    {additionalFields()}
                    <br></br>
                    <button onClick={() => addTodo()}>Добавить событие</button>
                    <button onClick={() => setVisible(0)}>Отмена</button>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <button onClick={() => setVisible(1)}>Добавить событие</button>
            {addTodoBody()}
        </div>
    )
}

export default AddTodo