import ToDoList from "./ToDoList";
import {render,screen,waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

/*
test('render todo list with heading and empty message',()=>{
    render(<ToDoList/>);
    const heading = screen.getByText('Todo List');
    expect(heading).toBeInTheDocument();
    const emptyMessage =  screen.getByText('No todos yet.Add one above!');
    expect(emptyMessage).toBeInTheDocument();
    const  input = screen.getByTestId('todo-input');
    expect(input).toBeInTheDocument();
})

test('adds a new todo and user types and clicks add button',async ()=>{
    const user = userEvent.setup();
    render(<ToDoList/>);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('Add Todo');

    await user.type(input,'Learn React Testing');
    await user.click(addButton);

    const todoItem = screen.getByText('Learn React Testing');
    expect(todoItem).toBeInTheDocument();
    expect(input).toHaveValue('');
});

test('does not add empty todos',async ()=> {
    const user = userEvent.setup();
    render(<ToDoList/>);
    const addButton = screen.getByText('Add Todo');
    await user.click(addButton);
    const emptyMessage = screen.getByText('No todos yet.Add one above!');
    expect(emptyMessage).toBeInTheDocument();
    const input = screen.getByTestId('todo-input');
    await user. type(input,'   ');
    await user.click(addButton);
    expect(emptyMessage).toBeInTheDocument();
});

test('adds multiple todos', async ()=>{
    const  user = userEvent.setup();
    render(<ToDoList/>);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('Add Todo');

    await user.type(input,'First todo');
    await user.click(addButton);

    await user.type(input,'Second todo');
    await user.click(addButton);

    await user.type(input,'Third todo');
    await user.click(addButton);

    expect(screen.getByText('First todo')).toBeInTheDocument();
    expect(screen.getByText('Second todo')).toBeInTheDocument();
    expect(screen.getByText('Third todo')).toBeInTheDocument();
});

test('deletes a todo when a delete button is clicked',async ()=>{
    const user = userEvent.setup();
    render(<ToDoList/>);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('Add Todo');

    await user.type(input,'Todo to delete');
    await user.click(addButton);

    expect(screen.getByText('Todo to delete')).toBeInTheDocument();

    const deleteButtons = screen.getAllByText('Delete');
    await user.click(deleteButtons[0]);

    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
    
})

test('deletes the correct todo from multiple todos',async ()=>{
    const user=userEvent.setup();
    render(<ToDoList/>);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('Add Todo');

    await user.type(input,'First todo');
    await user.click(addButton);

    await user.type(input,'Second todo');
    await user.click(addButton);

    await user.type(input,'Third todo');
    await user.click(addButton);

    const deleteButtons = screen.getAllByText('Delete');
    await user.click(deleteButtons[1]);

    expect(screen.getByText('First todo')).toBeInTheDocument();
    expect(screen.queryByText('Second todo')).not.toBeInTheDocument();
    expect(screen.getByText('Third todo')).toBeInTheDocument();

});
*/

beforeEach(()=>{
    jest.useFakeTimers();
})

afterEach(()=>{
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
})

test('adds todo after async operation completes',async ()=>{
    const user = userEvent.setup({advanceTimers: jest.advanceTimersByTime});
    //this thing not added by tutor advanceTimers: jest.advanceTimersByTime
    render(<ToDoList/>);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('Add Todo');

    await user.type(input,'Async todo');
    await user.click(addButton);

    jest.advanceTimersByTime(1000);

    await waitFor(()=>{
        expect(screen.getByText('Async todo')).toBeInTheDocument();
    })
})