import MyButton from "../Fields/MyButton";
import "./style.scss";

function Filters({ activeFilter, setFilter }) {
  return (
    <div className="filters">
      <MyButton
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </MyButton>

      <MyButton
        className={activeFilter === "have" ? "active" : ""}
        onClick={() => setFilter("have")}
      >
        Have
      </MyButton>

      <MyButton
        className={activeFilter === "ran-out" ? "active" : ""}
        onClick={() => setFilter("ran-out")}
      >
        Ran out
      </MyButton>
    </div>
  );
}

export default Filters;
