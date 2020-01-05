import React from 'react'

const Todos = ({todos,deleteTodo}) =>{
    
    const TodoList = todos.length? (
        todos.map(t => {
            return(
                <div className="collection-item" key={t.id}>
                    <span onClick={ ()=>{deleteTodo(t.id)} }>{t.content}</span>                    
                </div>
            )
        })
    ):(
        <p className='center'>You have no Todos left. YAY!</p>
    )

    return(
        <div className="todos collection">
            {TodoList}
        </div>

    )
}

export default Todos
