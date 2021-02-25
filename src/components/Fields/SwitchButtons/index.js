import MyButton from "../MyButton";
import "./style.scss";

function SwitchButtons({ completed, completedText, uncompletedText, onClick }) {
  const handleClick = (newStatus) => {
    if (newStatus !== completed) onClick();
  };

  return (
    <div className="switch-buttons">
      <MyButton
        className={`completed-button ${completed ? "active" : ""}`}
        onClick={() => handleClick(true)}
      >
        {completedText}
      </MyButton>
      <MyButton
        className={`uncompleted-button ${completed ? "" : "active"}`}
        onClick={() => handleClick(false)}
      >
        {uncompletedText}
      </MyButton>
    </div>
  );
}

SwitchButtons.defaultProps = {
  completedText: "ON",
  uncompletedText: "OFF",
};

export default SwitchButtons;
