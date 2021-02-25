import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGrocery } from "../../store/actions";
import "./style.scss";

const getFormInitialState = () => ({
  name: "",
  priority: 1,
});

function AddGroceryForm() {
  const [formValues, setFormValues] = useState(getFormInitialState());
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formValues.name.replace(/\s/g, "")) {
      return;
    }

    dispatch(addGrocery(formValues));

    setFormValues(getFormInitialState());
  }

  return (
    <form onSubmit={handleSubmit} className="grocery-form">
      <div className="field-wrapper">
        <label htmlFor="name">Enter name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>

      <div className="field-wrapper">
        <label htmlFor="priority">Priority: </label>
        <div>
          <input
            id="priority"
            type="range"
            min="1"
            max="5"
            name="priority"
            value={formValues.priority}
            onChange={handleChange}
          />
          {formValues.priority}
        </div>
      </div>

      <button type="submit" className="submit-button pointer">SUBMIT</button>
    </form>
  );
}

export default AddGroceryForm;
