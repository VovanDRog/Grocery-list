import "./style.scss";

export default function MyButton({ onClick, className, children }) {
  return (
    <button className={`button-c ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
