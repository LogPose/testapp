import React, { useState } from 'react'
import '../TodoList/TodoListStyle.css'

function TodoList(props) {
    let currentDay = props.currentDay
    const [eventType, setEventType] = useState('holiday')
    const [newItem, setNewItem] = useState(
        {name: '', type: eventType, budget: '', date: '', address: '', desc: ''})
    
    const [visible, setVisible] = useState(false)

    const [todoListItems, setTodoListItems] = useState([
        {name: 'Вечеринка у Билли', type: 'holiday', budget: '300$', date: 'Wed May 19 2021'},
        {name: 'Выпить кофе', type: 'event', time: '18:00', address: 'Терешковой 25', date: 'Thu May 20 2021'},
        {name: 'Пора найти работу', type: 'note', desc: 'Найти уже работу на фронтенде', date: 'Fri May 21 2021'},
        {name: 'Лекция по JS', type: 'event', time: '22:00', address: 'Фрунзе 91', date: 'Wed May 19 2021'},
    ])

    let item = {}

    let todoList = todoListItems.filter(el=> el.date == currentDay.toDateString()).map((el) => {
        switch(el.type) {
            case 'holiday': 
                return (<div className="eventBlock" key={el.name}>
                            <button className="deleteButton" onClick={() => deleteItem(el.name)}>Удалить</button>
                            <div className="title"><h1>{el.name}</h1></div>
                            <div className="description"><h2>Бюджет на праздник: {el.budget}</h2></div>
                        </div>)
            case 'event':
                return (<div className="eventBlock" key={el.name}>
                            <button className="deleteButton" onClick={() => deleteItem(el.name)}>Удалить</button>
                            <div className="title"><h1>{el.name}</h1></div>
                            <div className="description"><h2>Время: {el.time}, Адрес: {el.address}</h2></div>
                            
                        </div>) 
            case 'note':
                return (<div className="eventBlock" key={el.name}>
                            <button className="deleteButton" onClick={() => deleteItem(el.name)}>Удалить</button >
                            <div className="title"><h1>{el.name}</h1></div>
                            <div className="description"><h2>{el.desc}</h2></div>
                        </div>)
        }
    })  

    function deleteItem(name) {
        const idx = todoListItems.findIndex((el) => el.name === name)
        const newArray = [...todoListItems.slice(0, idx), ...todoListItems.slice(idx + 1, todoListItems.length)]
        setTodoListItems(newArray)
        console.log(newArray)
        console.log(idx)
 
    }

    function addNewItem() {
        console.log(currentDay)
        setVisible(!visible)
        item = newItem
        item.date = currentDay.toDateString()
        item.type = eventType
        setEventType('holiday')
        setTodoListItems([
            ...todoListItems,
            item
        ])
        console.log(item)
    }

    let additionalElements = () => {
        if (eventType === 'holiday') {
            return (
                <div>
                    <h3>Укажите бюджет на праздник:</h3>
                    <input className="addFormInput" type="nubmers" onChange={(event) => setNewItem(prev => {return{...prev, budget: event.target.value}})}></input>
                </div>
            )
        } else if (eventType === 'event') {
            return (
                <div>
                    <h3>Укажите время:</h3>
                    <input className="addFormInput" type="text" onChange={(event) => setNewItem(prev => {return{...prev, time: event.target.value}})}></input>
                    <h3>Укажите место:</h3>
                    <input className="addFormInput" type="text" onChange={(event) => setNewItem(prev => {return{...prev, address: event.target.value}})}></input>
                </div>
            )
        } else if (eventType === 'note') {
            return (
                <div>
                    <h3>Текст заметки:</h3>
                    <input className="addFormNote" type="text" onChange={(event) => setNewItem(prev => {return{...prev, desc: event.target.value}})}></input>
                </div>
            )
        }
    }

    let addItemForm = () => {if (visible) {
        return (
            <div className='addForm'>
                <h3>Введите название:</h3>
                <input className="addFormInput" type="text" onChange={(event) => setNewItem(prev => {return{...prev, name: event.target.value}})}></input>
                <br></br>
                <h3>Выберите тип мероприятия:</h3>
                <button onClick={() => setEventType('holiday')}>Праздник</button>
                <button onClick={() => setEventType('event')}>Мероприятие</button>
                <button onClick={() => setEventType('note')}>Заметка</button>
                <br></br>
                {additionalElements()}
                <br></br>
                <br></br>
                <button onClick={() => {addNewItem()}}>Добавить</button>
                <button onClick={() => {setVisible(!visible)}}>Отмена</button>
                </div>
        )
    } else return(null)}



    return (
        <div>
            <button className="add-button" onClick={() => setVisible(!visible)}>Добавить новое событие</button>
                {addItemForm()}
            <div className="todoList">
                {todoList}
            </div>
        </div>
    )
}

export default TodoList
