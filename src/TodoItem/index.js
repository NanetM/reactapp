import { FcEmptyTrash } from "react-icons/fc";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
       ✔
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      onClick={props.onComplete}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
      <FcEmptyTrash />
      </span>
    </li>
  );
}

export { TodoItem };
