import React, { useState } from 'react'
import AddTodo from './AddTodo'
import MyCalendar from './Calendar'
import TodoList from './TodoList'

function App() {
    
    const [choosenDate, setChoosenDate] = useState('')

    function chooseDate(value) {
        setChoosenDate(value)
    }

    function addTodo() {
        console.log('Add')
    }

    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <MyCalendar chooseDate={chooseDate} />
            <TodoList choosenDate={choosenDate} addTodo={addTodo}/>
        </div>
    )
}

export default App