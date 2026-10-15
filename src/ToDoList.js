import React,{useState} from 'react';

function ToDoList(){
    const [todos,setTodos]=useState([]);
    const [inputValue,setInputValue]=useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const addTodo = async () => {
        if(inputValue.trim() === ''){
            return;
        }
        const newTodo = {
            id:Date.now(),
            text:inputValue
        };

        await saveTodoToServer(newTodo);

        setTodos([...todos,newTodo]);
        setInputValue('');
    };

    const deleteTodo = (id) =>{
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    const saveTodoToServer = async (todo)=> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({success:true,todo});
            },1000);
        });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter a todo'
                    value={inputValue}
                    onChange={handleInputChange}
                    data-testid="todo-input"/>
                <button onClick={addTodo}>Add Todo</button>
            </div>

            <div data-testid="todos-list">
                {todos.length === 0 ?(
                    <p>No todos yet.Add one above!</p>):
                    (
                        <ul>
                            {todos.map(todo=>(
                                <li key={todo.id} data-testid={`todo-item-${todo.id}`}>
                                    {todo.text}
                                    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </div>
    )
}

export default ToDoList;