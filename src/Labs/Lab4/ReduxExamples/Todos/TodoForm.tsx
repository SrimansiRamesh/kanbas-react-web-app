import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./TodosReducer";

export default function TodoForm() {
  const todo = useSelector((state:any) => state.Todos);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <input
        defaultValue={todo.title || ""}
        onChange={(e) => dispatch(setTodo({ title: e.target.value }))}
      />
      <div className="d-flex float-end">
      <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click" className="btn btn-warning" style={{ marginBottom: "10px", marginLeft:"10px" }}>Update</button>
      <button onClick={() => dispatch(addTodo())} id="wd-add-todo-click" className="btn btn-success" style={{ marginBottom: "10px", marginLeft:"10px" }}>Add</button>
      
      </div>

    </li>
  );
}