import React, { useState } from 'react'
import '../TodoList/TodoListStyle.css'

function TodoList(props) {

    const choosenDate = props.choosenDate

    const [todoListItems, setTodoListItems] = useState([
        {name: 'Вечеринка у Билли Херрингтона', type: 'holiday', budget: '300$', date: 'Wed May 19 2021 00:00:00 GMT+0700 (GMT+07:00)'},
        {name: 'Выпить кофе', type: 'event', time: '18:00', address: 'Терешковой 25', date: 'Thu May 20 2021 00:00:00 GMT+0700 (GMT+07:00)'},
        {name: 'Пора найти работу', type: 'note', desc: 'Найти уже работу на фронтенде', date: 'Fri May 21 2021 00:00:00 GMT+0700 (GMT+07:00)'},
        {name: 'Лекция по JS', type: 'event', time: '22:00', address: 'Фрунзе 91', date: 'Wed May 19 2021 00:00:00 GMT+0700 (GMT+07:00)'},
    ])
    let list = ''

    function edittItem(item) {
       console.log('edited')
    }

    list = todoListItems.filter(el => el.date == choosenDate).map((el) => 
        {if (el.type === 'holiday') {
            return (<div key={el.name}><h1>{el.name}</h1><button onClick={() => edittItem(el)}>Редактировать</button><h2>{el.budget}</h2></div>)
        } else if (el.type === 'event') {
            return (<div key={el.name}><h1>{el.name}</h1><button onClick={() => edittItem(el)}>Редактировать</button><h2>Адрес: {el.address}, Время: {el.time}</h2></div>)
        } else if (el.type === 'note') {
                return (<div key={el.name}><h1>{el.name}</h1><button onClick={() => edittItem(el)}>Редактировать</button><h2>Описание: {el.desc}</h2></div>)
        }})

    function addTodo() {
        let newItem = 
            {name: 'Победить Хашираму', type: 'event', time: '22:50', address: 'Долина завершения', date: choosenDate}
        console.log(newItem)
        todoListItems.push(newItem)
        setTodoListItems(todoListItems)
    }

    return (
        <div className="todoList">
            {list}
            <button onClick={addTodo}>Добавить событие</button>
        </div>
    )
}

export default TodoList
