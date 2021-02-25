import SwitchButtons from "../../Fields/SwitchButtons";
import { Link } from "react-router-dom";
import "./style.scss";
import formatDate from "../../../helpers/formatDate";

function GroceryItem(props) {
  const {
    id,
    name,
    priority,
    completed,
    history,
    handleStatusChange,
    handleDelete,
  } = props;

  function displayLatestChange() {
    if (history && history.length) {
      return formatDate(history[history.length-1].date);
    }
    return "It has not changed"
  }

  return (
    <li className="grocery-item">
      <Link to={`/${id}`} className="grocery-name pointer">
        {name}
      </Link>
      <div className="grocery-status-block">
        <SwitchButtons
          completed={completed}
          completedText="have"
          uncompletedText="ran out"
          onClick={() => handleStatusChange(id)}
        />
      </div>
      <div>Priority: {priority}</div>
      <div>Latest change: {displayLatestChange()}</div>
      <button
        className="delete-button pointer"
        title="DELETE"
        onClick={() => handleDelete(id)}
      >
        -
      </button>
    </li>
  );
}

export default GroceryItem;
