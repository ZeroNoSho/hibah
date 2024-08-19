const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type || "button"}
      className={className}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};
export default Button;
