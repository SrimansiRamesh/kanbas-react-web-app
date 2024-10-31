import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./TodosReducer";
export default function TodoItem({todo}:any) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item">
        {todo.title}  
        <div className="d-flex float-end">
        <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click" className="btn btn-primary" style={{ marginBottom: "10px", marginLeft:"10px" }}> Edit </button> 
        <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click" className="btn btn-danger" style={{ marginBottom: "10px", marginLeft:"10px" }}> Delete </button>
        
        </div>
        
         
        </li>);
    }