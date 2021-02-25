import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters";
import AddGroceryForm from "../../components/AddGroceryForm";
import GroceryList from "../../components/GroceryList";
import { defaultSortList, filterListByStatus } from "../../helpers/filterList";
import { setFilter } from "../../store/actions";

function ListPage() {
  const dispatch = useDispatch();

  const list = useSelector((state) => defaultSortList(state.groceries));
  const filter = useSelector((state) => state.filter);
  const filteredByStatusList = filterListByStatus(list, filter);

  function handleFilterChange(newFilter) {
    dispatch(setFilter(newFilter));
  }

  return (
    <div>
      <AddGroceryForm />
      <Filters setFilter={handleFilterChange} activeFilter={filter} />
      <GroceryList list={filteredByStatusList} />
    </div>
  );
}

export default ListPage;
