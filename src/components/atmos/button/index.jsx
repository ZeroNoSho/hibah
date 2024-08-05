const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type || "button"}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
