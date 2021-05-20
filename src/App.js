import React, { useState } from 'react'
import MyCalendar from './Calendar'
import TodoList from './TodoList'
import './style.css'

function App() {

    const [currentDay, setCurrentDay] = useState(new Date())

    return (
            <div className="app-body">
                <MyCalendar currentDay={setCurrentDay}/>
                <TodoList currentDay={currentDay}/>
            </div>
    )
}

export default App