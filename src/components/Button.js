import "./Button.css";

const Button = ({ className, value, onClick }) => {
  console.log("Button component loaded:", value);
  
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
