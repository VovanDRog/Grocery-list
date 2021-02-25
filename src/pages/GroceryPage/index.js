import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import MyButton from "../../components/Fields/MyButton";
import { getItemById } from "../../helpers/filterList";
import formatDate from "../../helpers/formatDate";
import { deleteGrocery } from "../../store/actions";
import "./style.scss";

function GroceryPage() {
  let { id } = useParams();

  let history = useHistory();

  const item = useSelector((state) => getItemById(state.groceries, id));

  const dispatch = useDispatch();

  function redirectToMain() {
    history.push("/");
  }

  function handleDelete() {
    dispatch(deleteGrocery(item.id));
    redirectToMain();
  }

  if (!item?.name) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <div className="grocery-page">
      <MyButton onClick={redirectToMain} className="back-button">
        BACK
      </MyButton>

      <dl className="grocery-info">
        <dt>Name</dt>
        <dd>{item.name}</dd>

        <dt>Status </dt>
        <dd>{item.completed ? "Have" : "Ran out"} </dd>

        <dt>Priority </dt>
        <dd>{item.priority} </dd>

        <dt>History </dt>
        {item.history && item.history.length
          ? item.history.map((date) => <dd>{formatDate(date)}</dd>)
          : "It has not changes"}
      </dl>

      <MyButton onClick={handleDelete}>DELETE</MyButton>
    </div>
  );
}

export default GroceryPage;
