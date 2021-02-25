import { useDispatch } from "react-redux";
import { changeGroceryStatus, deleteGrocery } from "../../store/actions";
import GroceryItem from "./GroceryItem";
import "./style.scss";

function GroceryList({ list }) {
  const dispatch = useDispatch();

  function handleStatusChange(id) {
    dispatch(changeGroceryStatus(id));
  }

  function handleDelete(id) {
    dispatch(deleteGrocery(id));
  }

  if (!list.length) {
    return <p> NO DATA </p>;
  }

  return (
    <ul className="grocery-list">
      {list.map((item) => (
        <GroceryItem
          key={item.id}
          {...item}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default GroceryList;
